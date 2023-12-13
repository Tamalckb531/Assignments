// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs');
const txt = fs.readFileSync('file.txt', 'utf-8');

const text = txt.replace(/\s+/g, ' ').trim();


fs.writeFile('file.txt', text, err => {
    if (err) {
      console.error(err);
    }
  });


/*
The          quick    brown          fox     jumps    over         the    lazy          dog.          Lorem          ipsum         dolor         sit     amet,     consectetur         adipiscing         elit.          Sed     consequat,         urna          vel         pellentesque,         felis          odio         ullamcorper         odio,         vitae          fermentum        felis         ante         non     justo.         Integer         tincidunt        bibendum        lacus,         eget         venenatis        eros         vulputate         id.     Aenean         euismod         nisl          in    magna          convallis,        vel         dignissim         velit        viverra.          Nullam         ac     ligula         ut     mi     ultrices         dictum.          Proin         eget         dui         at    augue          porttitor        mollis.          Phasellus         sagittis,          nisl          eu     mollis         fringilla,         libero         felis         vestibulum        justo,          et         malesuada        libero         lectus         in    nulla.         Nunc          vitae         quam         id     nisl          hendrerit        varius         id         et    enim.          Suspendisse         nec         purus         in    orci          imperdiet         varius         ac         non     velit.          Fusce         tristique,         arcu          nec         viverra         eleifend,        mauris          tellus         ultrices        odio,         eu         convallis        orci         felis          id    leo.     Duis         vel          malesuada        risus.          Curabitur        a          libero        ut     quam          aliquet        ullamcorper         vel         sed          ligula.
*/