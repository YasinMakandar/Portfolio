import React, { useState, useEffect } from 'react';

const Hero = () => {
    const [activeClass, setActiveClass] = useState({
        firstSpan: false,
        secondSpan: false,
        thirdSpan: false
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to manage class changes over time
    useEffect(() => {
        let currentStep = 0;

        const interval = setInterval(() => {
            setActiveClass((prevState) => {
                const newState = { firstSpan: false, secondSpan: false, thirdSpan: false };

                // Apply class based on the current step
                if (currentStep === 0) newState.firstSpan = true;
                if (currentStep === 1) newState.secondSpan = true;
                if (currentStep === 2) newState.thirdSpan = true;

                currentStep = (currentStep + 1) % 3; // Loop through the steps

                return newState;
            });
        }, 2850); // Change class every 1 second

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    const [tooltipOpen, setTooltipOpen] = useState(false);

    // Function to copy the email address to the clipboard
    const copy = () => {
        const email = "yasinmakandar03@gmail.com";
        navigator.clipboard.writeText(email).then(() => {
            setTooltipOpen(true); // Show tooltip when copied
            setTimeout(() => setTooltipOpen(false), 2000); // Hide tooltip after 2 seconds
        });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     // Open the modal after the form is submitted
    //     document.getElementById("my-modal").checked = true;
    // };

    const handleSubmit = (event) => {
        event.preventDefault();
      
        const formData = new FormData(event.target);
      
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        })
        .then(() => {
          console.log('Form successfully submitted');
          // Open modal
          document.getElementById("my-modal").checked = true;
        })
        .catch((error) => alert(error));
      
        // Reset the form
        event.target.reset();
    };
    



    const closeModal = () => {
        document.getElementById("my-modal").checked = false; // Uncheck the modal to close it
    };


    return (
        <>
            <div id='hero' className='hero min-h-85vh'>
                <div className='text-left hero-content items-start mt-14'>
                    <div className="pic">
                        <img src="pic.jpg" alt="Yasin" className='w-[448px] h-[448px] rounded-full mt-10 hidden lg:block lg:max-w-xs xl:max-w-md' />
                    </div>
                    <div className="max-w-2xl">
                        <p><span><img src="location.png" alt="location" className='w-4 h-4 inline mr-1' /></span>Karnataka, India</p>
                        <h1 className='mb-5 font-bold font-poppins'>
                            <span
                                className={`text-3xl md:text-4xl lg:text-5xl inline-block subpixel-antialiased ${activeClass.firstSpan ? 'name-gradient' : ''}`}
                            >
                                Yasin Makandar,
                            </span>
                            <br />
                            <span
                                className={`text-6xl md:text-8xl lg:text-9xl inline-block subpixel-antialiased ${activeClass.secondSpan ? 'first-word-gradient' : ''}`}
                            >
                                web
                            </span>
                            <br />
                            <span
                                className={`pb-4 text-6xl md:text-8xl lg:text-9xl inline-block subpixel-antialiased ${activeClass.thirdSpan ? 'second-word-gradient' : ''}`}
                            >
                                developer
                            </span>
                        </h1>
                        <p className="my-8 md:my-16 text-neutral xl:leading-loose font-[roboto]">
                            I’m a Web Developer based in Karnataka, India. I have an Computer Science & Engineering degree, coding is my passion and my professional career focus. Developing applications for the web has become my drive.
                        </p>

                        <a href="static/media/Yasin_Resume_.pdf" target="_blank" rel="noreferrer" className="btn mr-10 btn-md text-xs mb-5 sm:mb-0 bg-[#3D4451] text-white">
                            GET MY RESUME
                        </a>

                        <div className="dropdown dropdown-hover">
                            <a href="mailto:yasinmakandar03@gmail.com" target="_blank" rel="noreferrer" className="btn btn-outline btn-md text-xs font-[roboto] uppercase">
                                yasinmakandar03@gmail.com
                            </a>
                            <ul className="p-2 shadow dropdown-content font-roboto bg-base-100 rounded-box">
                                <li><a className="btn btn-ghost btn-sm text-xs lg:btn-md uppercase" href="mailto:yasinmakandar03@gmail.com" target="_blank" rel="noreferrer">Open in email client</a></li>
                                <li>
                                    <button onClick={copy} className="btn btn-ghost btn-sm text-xs lg:btn-md uppercase">
                                        <span data-tip="Copied to clipboard!" className={`${tooltipOpen ? 'tooltip tooltip-open tooltip-accent' : ''}`}>
                                            Copy email address
                                        </span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-wave-top w-full h-32 lg:h-64 2xl:h-96 bg-no-repeat bg-cover -mb-1">
                {/* <img src="wave.svg" alt="wave" /> */}
            </div>

            {/* Projects */}
            <div className="bg-black">
                <section id='section-projects'>
                    <div className="text-secondary undefined"><h2 className="header-projects text-5xl font-bold font-poppins text-center w-max subpixel-antialiased mx-auto p-2 pt-20">Projects</h2></div>


                    {/* Project Heart */}
                    <div className='mt-32 font-roboto flex flex-wrap-reverse gap-6 max-w-5xl mx-auto px-2 text-white'>
                        <div className='max-w-sm justify-self-end mx-auto'>
                            <div className='w-6/12 flex flex-col gap-4 mx-auto lg:mx-0 lg:ml-auto lg:w-8/12 pt-14'>
                                {/* <h3 class="text-xl font-bold mb-5 mt-3 undefined">Tech stack used in this project</h3> */}
                                <p className="text-secondary text-white mb-5">In this project, I employed the following technologies:</p>
                                <div className='grid grid-cols-3 gap-4'>
                                    <div className='flex flex-col items-center'>
                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="html.png" alt="html" />
                                        <span className="text-xs text-center">HTML5</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="css.png" alt="css" />
                                        <span className="text-xs text-center">CSS</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="js.png" alt="js" />
                                        <span className="text-xs text-center">JavaScript</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="github.webp" alt="git" />
                                        <span className="text-xs text-center">Git&Github</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="python.webp" alt="python" />
                                        <span className="text-xs text-center">Python</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="flask.png" alt="flask" />
                                        <span className="text-xs text-center">Flask</span>
                                    </div>
                                </div>
                                <a className="btn btn-[white] mb-5 w-full z-1 relative undefined" href="https://github.com/YasinMakandar/Heart-Care" target="_blank" rel="noreferrer">GitHub</a>
                            </div>
                        </div>
                        <div className='w-full md:w-9/12 md:mx-auto lg:max-w-xl'>
                            <h3 className="text-2xl font-bold mb-5 undefined">Heart-Care</h3>
                            <div className="text-secondary text-white flex flex-col gap-6 mb-5">
                                <p>This is a web application which uses multiple ML models, Python(Flask and NLTK) in the backend for predicting heart attack percentage of a person, Front-End is designed through HTML/CSS & JS, also integrated a chatbot for seamless user experience which replies with common diseases treatment recommendations.</p>
                                <img src="Picture1.png" alt="Project" />
                            </div>
                        </div>
                    </div>

                    {/* Project PassHOLD */}
                    <div className='mt-32 font-roboto flex flex-wrap  gap-6 max-w-5xl mx-auto px-2 text-white'>
                        <div className='w-full md:w-9/12 md:mx-auto lg:max-w-xl'>
                            <h3 className="text-2xl font-bold mb-5 undefined">PassHOLD</h3>
                            <div className="text-secondary text-white flex flex-col gap-6 mb-5">
                                <p>Comprehensive Password Manager using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application features a user-friendly interface for securely storing and managing credentials. Users can easily add and retrieve site URLs, usernames, and passwords, ensuring data security and efficient management.</p>
                                <img src="Pass.png" alt="Pass" />
                            </div>
                        </div>
                        <div className="max-w-sm justify-self-end mx-auto">
                            <div className='w-6/12 mx-auto flex flex-col gap-4 lg:mx-0 lg:mr-auto lg:w-8/12 pt-14'>
                                {/* <h3 class="text-xl font-bold mb-5 mt-3 undefined">Tech stack used in this project</h3> */}
                                <p className="text-secondary text-white mb-5">In this project, I employed the following technologies:</p>
                                <div className='grid grid-cols-3 gap-4'>
                                    <div className='flex flex-col items-center'>
                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="html.png" alt="html" />
                                        <span className="text-xs text-center">HTML5</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="css.png" alt="css" />
                                        <span className="text-xs text-center">CSS</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="js.png" alt="js" />
                                        <span className="text-xs text-center">JavaScript</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="github.webp" alt="git" />
                                        <span className="text-xs text-center">Git&Github</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="react.png" alt="python" />
                                        <span className="text-xs text-center">React</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="mongo.png" alt="mongo" />
                                        <span className="text-xs text-center">MongoDB</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="node.png" alt="node" />
                                        <span className="text-xs text-center">Node</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="express.png" alt="express" />
                                        <span className="text-xs text-center">Express</span>
                                    </div>
                                </div>
                                <a className="btn btn-[white] mb-1 w-full z-1 relative undefined" href="https://github.com/YasinMakandar/PassHOLD-Mongo" target="_blank" rel="noreferrer">GitHub</a>

                                <a className="btn btn-[white] mb-5 w-full z-1 relative undefined" href="https://passhold.netlify.app/" target="_blank" rel="noreferrer">Watch it Live</a>
                            </div>
                        </div>

                    </div>

                    {/* ProjectX */}
                    <div className='mt-32 font-roboto flex flex-wrap-reverse gap-6 max-w-5xl mx-auto px-2 text-white'>
                        <div className='max-w-sm justify-self-end mx-auto'>
                            <div className='w-6/12 flex flex-col gap-4 mx-auto lg:mx-0 lg:ml-auto lg:w-8/12 pt-14'>
                                {/* <h3 class="text-xl font-bold mb-5 mt-3 undefined">Tech stack used in this project</h3> */}
                                <p className="text-secondary text-white mb-5">In this project, I employed the following technologies:</p>
                                <div className='grid grid-cols-3 gap-4'>
                                    <div className='flex flex-col items-center'>
                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="html.png" alt="html" />
                                        <span className="text-xs text-center">HTML5</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="css.png" alt="css" />
                                        <span className="text-xs text-center">CSS</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="js.png" alt="js" />
                                        <span className="text-xs text-center">JavaScript</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="github.webp" alt="git" />
                                        <span className="text-xs text-center">Git&Github</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="python.webp" alt="python" />
                                        <span className="text-xs text-center">Python</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="django.png" alt="django" />
                                        <span className="text-xs text-center">Django</span>
                                    </div>
                                </div>
                                <a className="btn btn-[white] mb-5 w-full z-1 relative undefined" href="https://github.com/YasinMakandar/Heart-Care" target="_blank" rel="noreferrer">GitHub</a>
                            </div>
                        </div>
                        <div className='w-full md:w-9/12 md:mx-auto lg:max-w-xl'>
                            <h3 className="text-2xl font-bold mb-5 undefined">ProjectX</h3>
                            <div className="text-secondary text-white flex flex-col gap-6 mb-5">
                                <p>ProjectX is a client management system developed using Python and the Django framework, designed to simplify and enhance the management of client relationships. It offers a secure platform for storing and managing client data, tracking communications, and handling client-related tasks.</p>
                                <img src="X.png" alt="ProjectX" />
                            </div>
                        </div>
                    </div>

                    {/* Project iPhone */}
                    <div className='mt-32 font-roboto flex flex-wrap  gap-6 max-w-5xl mx-auto px-2 text-white'>
                        <div className='w-full md:w-9/12 md:mx-auto lg:max-w-xl'>
                            <h3 className="text-2xl font-bold mb-5 undefined">iPhone Website Clone</h3>
                            <div className="text-secondary text-white flex flex-col gap-6 mb-5">
                                <p>iPhone 15 Pro Clone website made using React, GSAP and ThreeJs. Also Added Sentry to track performace and monitor website.</p>
                                <img src="iPhone.png" alt="iPhone" />
                            </div>
                        </div>
                        <div className="max-w-sm justify-self-end mx-auto">
                            <div className='w-6/12 mx-auto flex flex-col gap-4 lg:mx-0 lg:mr-auto lg:w-8/12 pt-14'>
                                {/* <h3 class="text-xl font-bold mb-5 mt-3 undefined">Tech stack used in this project</h3> */}
                                <p className="text-secondary text-white mb-5">In this project, I employed the following technologies:</p>
                                <div className='grid grid-cols-3 gap-4'>
                                    <div className='flex flex-col items-center'>
                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="react.png" alt="python" />
                                        <span className="text-xs text-center">React</span>
                                    </div>
                                    <div className='flex flex-col items-center'>

                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="html.png" alt="html" />
                                        <span className="text-xs text-center">HTML5</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="tail.png" alt="tail" />
                                        <span className="text-xs text-center">Tailwind CSS</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="vitelogo.png" alt="vite" />
                                        <span className="text-xs text-center">Vite</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="github.webp" alt="git" />
                                        <span className="text-xs text-center">Git&Github</span>
                                    </div>

                                    <div className='flex flex-col items-center'>
                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="three.webp" alt="three" />
                                        <span className="text-xs text-center">ThreeJS</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="sentry.png" alt="sentry" />
                                        <span className="text-xs text-center">Sentry</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="gsap.png" alt="gsap" />
                                        <span className="text-xs text-center">GSAP</span>
                                    </div>
                                </div>
                                <a className="btn btn-[white] mb-1 w-full z-1 relative undefined" href="https://github.com/YasinMakandar/iPhone-15-Pro-Clone" target="_blank" rel="noreferrer">GitHub</a>

                                <a className="btn btn-[white] mb-5 w-full z-1 relative undefined" href="https://iphone15web.netlify.app/" target="_blank" rel="noreferrer">Watch it Live</a>
                            </div>
                        </div>

                    </div>

                    {/* Project LMS */}
                    <div className='mt-32 font-roboto flex flex-wrap-reverse gap-6 max-w-5xl mx-auto px-2 text-white'>
                        <div className='max-w-sm justify-self-end mx-auto'>
                            <div className='w-6/12 flex flex-col gap-4 mx-auto lg:mx-0 lg:ml-auto lg:w-8/12 pt-14'>
                                {/* <h3 class="text-xl font-bold mb-5 mt-3 undefined">Tech stack used in this project</h3> */}
                                <p className="text-secondary text-white mb-5">In this project, I employed the following technologies:</p>
                                <div className='grid grid-cols-3 gap-4'>
                                    <div className='flex flex-col items-center'>
                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="html.png" alt="html" />
                                        <span className="text-xs text-center">HTML5</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="css.png" alt="css" />
                                        <span className="text-xs text-center">CSS</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="js.png" alt="js" />
                                        <span className="text-xs text-center">JavaScript</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="github.webp" alt="git" />
                                        <span className="text-xs text-center">Git&Github</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="python.webp" alt="python" />
                                        <span className="text-xs text-center">Python</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="django.png" alt="django" />
                                        <span className="text-xs text-center">Django</span>
                                    </div>
                                </div>
                                <a className="btn btn-[white] mb-1 w-full z-1 relative undefined" href="https://github.com/YasinMakandar/GTTC_LMS_Admin_Side" target="_blank" rel="noreferrer">GitHub</a>
                                <a className="btn btn-[white] mb-5 w-full z-1 relative undefined" href="https://lmsgttc.netlify.app/" target="_blank" rel="noreferrer">Watch it Live</a>

                            </div>
                        </div>
                        <div className='w-full md:w-9/12 md:mx-auto lg:max-w-xl'>
                            <h3 className="text-2xl font-bold mb-5 undefined">GTTC_LMS</h3>
                            <div className="text-secondary text-white flex flex-col gap-6 mb-5">
                                <p>It is an Learning management system for admin side developed for GTTC, which let admin to create course, add subjects, upload videos, see the details of free and paid subscribers and revenue chart which is also printable. <br /> <strong>(Not yet completed, woking on it.)</strong> <br /> <strong>Email: </strong>admin@example.com <br /> <strong>Password: </strong>admin123 </p>
                                <img src="lms.png" alt="LMS" />
                            </div>
                        </div>
                    </div>

                    {/* Project Aconews */}
                    <div className='mt-32 font-roboto flex flex-wrap  gap-6 max-w-5xl mx-auto px-2 text-white'>
                        <div className='w-full md:w-9/12 md:mx-auto lg:max-w-xl'>
                            <h3 className="text-2xl font-bold mb-5 undefined">Aconews</h3>
                            <div className="text-secondary text-white flex flex-col gap-6 mb-5">
                                <p>Ackonews is a news aggregation web application that fetches the latest articles using the <a className='underline' href="https://gnews.io/">gnews.io</a> API. The app allows users to search for news based on keywords, country, language, and category.</p>
                                <img src="aconews.png" alt="aconews" />
                            </div>
                        </div>
                        <div className="max-w-sm justify-self-end mx-auto">
                            <div className='w-6/12 mx-auto flex flex-col gap-4 lg:mx-0 lg:mr-auto lg:w-8/12 pt-14'>
                                {/* <h3 class="text-xl font-bold mb-5 mt-3 undefined">Tech stack used in this project</h3> */}
                                <p className="text-secondary text-white mb-5">In this project, I employed the following technologies:</p>
                                <div className='grid grid-cols-3 gap-4'>
                                    <div className='flex flex-col items-center'>
                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="react.png" alt="python" />
                                        <span className="text-xs text-center">React</span>
                                    </div>
                                    <div className='flex flex-col items-center'>

                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="html.png" alt="html" />
                                        <span className="text-xs text-center">HTML5</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="tail.png" alt="tail" />
                                        <span className="text-xs text-center">Tailwind CSS</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="vitelogo.png" alt="vite" />
                                        <span className="text-xs text-center">Vite</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="github.webp" alt="git" />
                                        <span className="text-xs text-center">Git&Github</span>
                                    </div>

                                    <div className='flex flex-col items-center'>
                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="firebase.webp" alt="firebase" />
                                        <span className="text-xs text-center">Firebase</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="vercel.png" alt="vercel" />
                                        <span className="text-xs text-center">Vercel</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <img className='h-8 w-8 inline mb-1 mr-1 turn-white' src="express.png" alt="express" />
                                        <span className="text-xs text-center">Express</span>
                                    </div>
                                </div>
                                <a className="btn btn-[white] mb-1 w-full z-1 relative undefined" href="https://github.com/YasinMakandar/Aconews_Repo" target="_blank" rel="noreferrer">GitHub</a>

                                <a className="btn btn-[white] mb-5 w-full z-1 relative undefined" href="https://ackonews-f274b.web.app/" target="_blank" rel="noreferrer">Watch it Live</a>
                            </div>
                        </div>

                    </div>

                </section>
            </div>

            <div className="bg-wave-bottom w-full h-32 lg:h-64 2xl:h-96 bg-no-repeat bg-cover -mb-1">
                {/* <img src="wave.svg" alt="wave" /> */}
            </div>


            {/* Experience */}
            <section id='section-experience' className='font-poppins'>

                <div className="text-secondary mt-24 lg:mt-20">
                    <h2 className="header-experience text-5xl font-bold font-poppins text-center w-max subpixel-antialiased mx-auto p-2 pt-20">Experience</h2>
                </div>

                {/* Compsoft */}
                <div className='mt-32 flex flex-wrap-reverse md:flex-nowrap gap-6 max-w-5xl mx-auto px-2'>

                    <div className='w-2/6 justify-self-end mx-auto'>
                        <div className="bg-aiml bg-contain bg-no-repeat opacity-10 w-40 md:w-52 h-40 md:h-52 z-0 absolute -ml-5"></div>
                        <div className="w-10/12 mx-auto md:mx-0 md:ml-auto md:w-8/12 pt-7">
                            <a className="btn mb-5 w-full z-1 relative bg-[#3D4451] hover:bg-[#2A2E37] text-white" href="https://www.compstechnologies.com/" target="_blank" rel="noreferrer">Company</a>
                            <a className="btn mb-5 w-full z-1 relative bg-[#3D4451] hover:bg-[#2A2E37] text-white" href="https://drive.google.com/file/d/1UHRf3-jBPXVvzMe3g5p1oSJNqyQEx2f_/view" target="_blank" rel="noreferrer">Certificate</a>
                        </div>
                    </div>

                    <div className='w-full'>
                        <h3 className="text-2xl font-bold mb-5 undefined">Compsoft Technologies </h3>
                        <p><span><img src="location.png" alt="location" className='w-4 h-4 inline mr-1 text-sm' /></span>Bangalore, Karnataka</p>
                        <p className='w-4 h-4 inline mr-1 text-sm'>Aug 2023 - Sep 2023</p>
                        <br />
                        <div className="text-base-content mb-5 mt-3">
                            <p>During my internship, I learnt Healthcare is very important to lead a good life. However, it is very difficult to obtain a consultation with a doctor for every health problem.</p>
                        </div>
                        <div className="text-base-content mb-5">
                            <p>The idea was to create a medical chatbot using Artificial Intelligence that can diagnose the disease and provide basic details about the disease before consulting a doctor. This will help to reduce healthcare costs and improve accessibility to medical knowledge through medical chatbots.</p>
                        </div>
                        <div className="text-base-content mb-5">
                            <p>So, goal of this project was to create a Healthcare Chatbot using a combination of Python, JavaScript, HTML/CSS, and the Rasa library. The primary objectives were to provide interactive platform for obtaining information about various diseases.</p>
                        </div>
                    </div>

                </div>

                <div className="divider w-1/2 mx-auto "></div>

                {/* GTTC */}
                <div className='mt-32 flex flex-wrap-reverse md:flex-nowrap gap-6 max-w-5xl mx-auto px-2'>

                    <div className='w-2/6 justify-self-end mx-auto'>
                        <div className="bg-fullstack bg-contain bg-no-repeat opacity-10 w-40 md:w-52 h-40 md:h-52 z-0 absolute -ml-5"></div>
                        <div className="w-10/12 mx-auto md:mx-0 md:ml-auto md:w-8/12 pt-7">
                            <a className="btn mb-5 w-full z-1 relative bg-[#3D4451] hover:bg-[#2A2E37] text-white" href="https://gttcmsdc.com/" target="_blank" rel="noreferrer">Company</a>
                            <a className="btn mb-5 w-full z-1 relative bg-[#3D4451] hover:bg-[#2A2E37] text-white" href="#experience" target="" rel="noreferrer">Certificate</a>
                        </div>
                    </div>

                    <div className='w-full'>
                        <h3 className="text-2xl font-bold mb-5 undefined">Government Tool Room & Training Center</h3>
                        <p><span><img src="location.png" alt="location" className='w-4 h-4 inline mr-1 text-sm' /></span>Hubli, Karnataka</p>
                        <p className='w-4 h-4 inline mr-1 text-sm'>June 2024 - Aug 2024</p>
                        <br />
                        <div className="text-base-content mb-5 mt-3">
                            <p>During my internship, I developed a Learning Management System for admin side only.</p>
                        </div>
                        <div className="text-base-content mb-5">
                            <p>The idea was to create a Learning Management System that let's admin to add, update and delete the courses, subjects, upload videos and Mock tests. Also admin can see users enrolled and revenue chart.</p>
                        </div>
                        <div className="text-base-content mb-5">
                            <p>So, I made this project using Python, Django, HTML/CSS and Javascript.</p>
                        </div>
                    </div>

                </div>

                <div className="divider w-1/2 mx-auto "></div>

            </section>

            <div className="bg-wave-top w-full h-32 lg:h-64 2xl:h-96 bg-no-repeat bg-cover mt-10 -mb-1"></div>

            {/* Contact */}

            <div className='bg-black pb-32'>

                <section id='section-contact' className='font-poppins'>

                    <div className="text-secondary undefined">
                        <h2 className="header-contact text-5xl font-bold font-poppins text-center w-max subpixel-antialiased mx-auto p-2 pt-20">Contact</h2>
                    </div>

                    <div className='flex flex-col gap-10 max-w-2xl mx-auto px-2'>
                        <h3 className="text-2xl font-bold mb-5 text-white text-center mt-32">Let's get in touch!</h3>
                        <p className="text-6xl text-center">📣</p>
                        <div className="flex flex-wrap-reverse justify-around">
                            <div className="dropdown dropdown-hover">
                                <a href="mailto:yasinmakandar03@gmail.com" target="_blank" rel="noreferrer" className="btn btn-outline btn-md text-xs font-[roboto] uppercase bg-white hover:bg-[#D2D4D7] text-black">
                                    yasinmakandar03@gmail.com
                                </a>
                                <ul className="p-2 shadow dropdown-content font-roboto bg-base-100 rounded-box">
                                    <li><a className="btn btn-ghost btn-sm text-xs lg:btn-md uppercase" href="mailto:yasinmakandar03@gmail.com" target="_blank" rel="noreferrer">Open in email client</a></li>
                                    <li>
                                        <button onClick={copy} className="btn btn-ghost btn-sm text-xs lg:btn-md uppercase">
                                            <span data-tip="Copied to clipboard!" className={`${tooltipOpen ? 'tooltip tooltip-open tooltip-accent' : ''}`}>
                                                Copy email address
                                            </span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <a className="btn btn-primary mb-5 w-full z-1 relative w-max btn-md sm:mb-0 bg-white text-black uppercase hover:bg-[#D2D4D7] border-none " href="https://www.linkedin.com/in/yasin-makandar/" target="_blank" rel="noreferrer">Message me on LinkedIn</a>
                        </div>

                        <div className="text-secondary mb-5 text-white">You can shoot me an email, send me a message on LinkedIn, or, if you prefer, use the contact form below.</div>

                        <label htmlFor="my-modal"></label>
                        <input type="checkbox" id="my-modal" className="modal-toggle" readOnly="" />

                        <div className="modal">
                            <div className="modal-box mx-16">
                                <p>Your message was successfully sent. 😄</p>
                                <p className="mt-10">Thank you!</p>
                                <div className="modal-action">
                                    <button className="btn" onClick={closeModal}>Close</button>
                                </div>
                            </div>
                        </div>

                        <form
                            name="contact"
                            method="POST"
                            data-netlify="true"
                            onSubmit={handleSubmit}
                            className="p-10 card bg-base-200"

                        >
                            {/* Hidden input for Netlify form handling */}
                            <input type="hidden" name="form-name" value="contact" />

                            {/* Your form fields */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your name</span>
                                </label>
                                <input
                                    type="text"
                                    name="contactName"
                                    placeholder="Alan walker"
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your e-mail address</span>
                                </label>
                                <input
                                    type="email"
                                    name="contactEmail"
                                    placeholder="alan@walker.com"
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your message</span>
                                </label>
                                <textarea
                                    name="contactMessage"
                                    className="textarea h-24 textarea-bordered"
                                    placeholder="I'm thinking to invite you to my next concert..."
                                    required
                                />
                            </div>

                            <input
                                type="submit"
                                className="btn w-max mt-10 mx-auto bg-[#3D4451] text-white uppercase hover:bg-[#2A2E37]"
                                value="Send message"
                            />
                        </form>

                    </div>


                </section>

            </div>

            <div className="bg-wave-bottom w-full h-32 lg:h-64 2xl:h-96 bg-no-repeat bg-cover -mt-5"></div>

            <footer className="flex flex-wrap justify-evenly gap-5 lg:gap-10 max-w-5xl m-auto mt-32">
                <nav>
                    <ul className="flex flex-col">
                        <li><a href="#section-projects" className="btn btn-ghost mb-2">Projects</a> </li>
                        <li><a href="#section-experience" className="btn btn-ghost mb-2">Experience</a> </li>
                        <li><a href="#section-contact" className="btn btn-ghost">Contact</a> </li>
                    </ul>
                </nav>
                <div className="text-left hero-content items-start">
                    <div className="max-w-2xl">
                        <p className="mb-5">
                            <span><img src="location.png" className="h-4 inline mb-1 mr-1" alt="Location pin icon" /></span>Karnataka, India
                        </p>
                        <h1 className="mb-5  font-bold font-poppins">
                            <span className="block text-md lg:text-xl">Yasin Makandar,</span>
                            <span className="text-3xl lg:text-5xl subpixel-antialiased">web<br />developer</span>
                        </h1>
                        <a href="static/media/Yasin_Resume_.pdf" target="_blank" rel="noreferrer" className="btn mr-10 btn-md mb-5 sm:mb-0 bg-[#3D4451] hover:bg-[#2A2E37] text-white uppercase">Get my Resume</a>
                        <div className="dropdown dropdown-hover">
                            <a href="mailto:yasinmakandar03@gmail.com" target="_blank" rel="noreferrer" className="btn btn-outline btn-md text-xs font-[roboto] uppercase bg-white hover:bg-[#1F2937] text-black">
                                yasinmakandar03@gmail.com
                            </a>
                            <ul className="p-2 shadow z-10 dropdown-content font-roboto bg-base-100 rounded-box">
                                <li><a className="btn btn-ghost btn-sm text-xs lg:btn-md uppercase" href="mailto:yasinmakandar03@gmail.com" target="_blank" rel="noreferrer">Open in email client</a></li>
                                <li>
                                    <button onClick={copy} className="btn btn-ghost btn-sm text-xs lg:btn-md uppercase">
                                        <span data-tip="Copied to clipboard!" className={`${tooltipOpen ? 'tooltip tooltip-open tooltip-accent' : ''}`}>
                                            Copy email address
                                        </span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-14 flex justify-between">
                            <div>
                                <a href="https://www.linkedin.com/in/yasin-makandar/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><img src="linkedin.webp" alt="" className="w-10 h-10 mx-auto icon-link-dark" /></a>
                                <p className="text-center text-xs mt-1">LinkedIn</p>
                            </div>
                            <div>
                                <a href="https://www.linkedin.com/in/yasin-makandar/" target="_blank" rel="noreferrer" aria-label="Twitter"><img src="twitter.webp" alt="" className="w-10 h-10 mx-auto icon-link-dark" /></a>
                                <p className="text-center text-xs mt-1">Twitter</p>
                            </div>
                            <div>
                                <a href="https://github.com/YasinMakandar" target="_blank" rel="noreferrer" aria-label="GitHub"><img src="github1.webp" alt="" className="w-10 h-10 mx-auto icon-link-dark" /></a>
                                <p className="text-center text-xs mt-1">GitHub</p>
                            </div>
                        </div>
                        <div className="mt-10 text-xs">
                            <p>Made with ⌨ by Yasin Makandar</p>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
};

export default Hero;
