const courses = [{
        courseName: 'physics',
        writeUps: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, consequuntur ullam minus commodi a maxime!',
        imgSrc: 'images/physics.jpg_cropX1=0&cropX2=5453&cropY1=529&cropY2=3085'
    },
    {
        courseName: 'chemistry',
        writeUps: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, consequuntur ullam minus commodi a maxime!',
        imgSrc: 'images/chemistry.jpg'
    },
    {
        courseName: 'biology',
        writeUps: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, consequuntur ullam minus commodi a maxime!',
        imgSrc: 'images/biology.png'
    },
    {
        courseName: 'economics',
        writeUps: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, consequuntur ullam minus commodi a maxime!',
        imgSrc: 'images/Economics.jpg'
    },
    {
        courseName: 'arts',
        writeUps: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, consequuntur ullam minus commodi a maxime!',
        imgSrc: 'images/Arts.jpg'
    },
    {
        courseName: 'biology',
        writeUps: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, consequuntur ullam minus commodi a maxime!',
        imgSrc: 'images/biology.png'
    },
    {
        courseName: 'computer science',
        writeUps: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, consequuntur ullam minus commodi a maxime!',
        imgSrc: 'images/computer-science.jpg'
    }
]

const searchCourse = document.querySelector('#searchCourses');

searchCourse.addEventListener('input', () => {

    const searchVal = searchCourse.value.toLowerCase()
    const searched = courses.filter(course => course.courseName.includes(searchVal))
    const courseList = document.querySelector('#course-list');
    console.log(searched)
    if (searched == 0) {
        return courseList.innerHTML =
            `
     <h1 class='m-auto text-center'>No Results</h1>
`
    }


    if (searchVal == '') {
        return courseList.innerHTML = `
        <div class="d-md-flex p-5 justify-content-between align-items-center my-5 shadow-lg wow fadeInUp">
        <div class="col-12 col-md-5 m-auto m-md-0"><img class="img-fluid" src="images/physics.jpg_cropX1=0&cropX2=5453&cropY1=529&cropY2=3085" alt=""></div>
        <div class="col-12 col-md-5 p-5 p-md-0 m-auto m-md-0">
            <div class="col ">
                <h2>Physics</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, consequuntur ullam minus commodi a maxime!</p>
            </div>
        </div>
    </div>

    <div class="d-md-flex p-5 justify-content-between align-items-center my-5 shadow-lg wow fadeInUp">
        <div class="col-12 col-md-5 m-auto m-md-0"><img class="img-fluid" src="images/chemistry.jpg" alt=""></div>
        <div class="col-12 col-md-5 p-5 p-md-0 m-auto m-md-0">
            <div class="col ">
                <h2>Chemistry</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, consequuntur ullam minus commodi a maxime!</p>
            </div>
        </div>
    </div>

    <div class="d-md-flex p-5 justify-content-between align-items-center my-5 shadow-lg wow fadeInUp">
        <div class="col-12 col-md-5 m-auto m-md-0"><img class="img-fluid" src="images/biology.png" alt=""></div>
        <div class="col-12 col-md-5 p-5 p-md-0 m-auto m-md-0">
            <div class="col ">
                <h2>Biology</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, consequuntur ullam minus commodi a maxime!</p>
            </div>
        </div>
    </div>

    <div class="d-md-flex p-5 justify-content-between align-items-center my-5 shadow-lg wow fadeInUp">
        <div class="col-12 col-md-5 m-auto m-md-0"><img class="img-fluid" src="images/Economics.jpg" alt=""></div>
        <div class="col-12 col-md-5 p-5 p-md-0 m-auto m-md-0">
            <div class="col ">
                <h2>Economics</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, consequuntur ullam minus commodi a maxime!</p>
            </div>
        </div>
    </div>

    <div class="wow fadeInUp d-md-flex p-5 justify-content-between align-items-center my-5 shadow-lg">
        <div class="col-12 col-md-5 m-auto m-md-0"><img class="img-fluid" src="images/Arts.jpg" alt=""></div>
        <div class="col-12 col-md-5 p-5 p-md-0 m-auto m-md-0">
            <div class="col ">
                <h2>Arts</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, consequuntur ullam minus commodi a maxime!</p>
            </div>
        </div>
    </div>
        `
    } else {
        searched.map(items => {

            return courseList.innerHTML = `
            <div class="wow fadeInUp d-md-flex p-5 justify-content-between align-items-center my-5 shadow-lg">
        <div class="col-12 col-md-5 m-auto m-md-0"><img class="img-fluid" src="${items.imgSrc}" alt=""></div>
        <div class="col-12 col-md-5 p-5 p-md-0 m-auto m-md-0">
            <div class="col ">
                <h2 style="text-transform: capitalize">${items.courseName}</h2>
                <p>${items.writeUps}</p>
            </div>
        </div>
    </div>
            `


        })
    }
})