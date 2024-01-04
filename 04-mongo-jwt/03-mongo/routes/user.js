const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Course, User } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    User.create({
        username,
        password
    });

    res.json({
        msg: "User is created"
    })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const allCourse = await Course.find({})

    res.json({
        courses: allCourse
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic

    const username = req.body.username;
    const courseId = req.params.courseId;

    //* updateOne( {filter}, {update})
    await User.updateOne(
        {
            username: username
        },
        {
            "$push":{
                purchasedCourses: courseId
            }
        }
    )

    res.json({
        msg: "Course purchased successfully"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.body.username;

    const user = await User.findOne({
        username: username
    });

    const userCourses = Course.find({
        _id:{
            "$in": user.purchasedCourses //* It match the course Id with user course Id
        }
    });

    res.json({
        courses: userCourses
    })
});

module.exports = router