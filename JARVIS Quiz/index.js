var blackBackground = "#25262dff";

var elem = document.getElementsByClassName("main")[0];
var clickButton = document.getElementsByClassName("beginbtn")[0];
var heading1 = document.getElementsByClassName("heading1")[0];
var h1span = document.getElementsByClassName("heading1")[0];
var nuke = document.getElementsByClassName("nuke")[0];
var content = document.getElementsByClassName("content")[0];
var line = document.getElementsByClassName("dynamicText")[0];
var removeBeginbtn = document.getElementsByClassName("beginbtn")[0];
var removebegintext = document.getElementsByClassName("begintext")[0];

function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}

elementsToRemove = [
    "nuke", "h1span", "line", "content",
    "heading1", "begintext", "beginbtn",
    "sec", "headingRemove", "headingBackground"
]

elementsToRemoveStartPage = [
    "headDesign1", "headDesign2", "coverheadDesign1",
    "coverheadDesign2-1", "coverheadDesign2-2",
    "mainText", "startButton"
]

elementsToRemoveQuestionPage = [
    "circle", "HeadQuestionDesign", "questionBlock",
    "optionBlock", "progressBar", "leftContainer", "rightContainer"
]

clickButton.addEventListener('click', (e) => {
    openFullscreen();

    e.preventDefault();

    elem.classList.add("mainFullScreen");

    var mainFullScreen = document.getElementsByClassName("mainFullScreen")[0];
    mainFullScreen.addEventListener('click', (e) => {
        openFullscreen();
    });

    content.classList.add("lineRemove");
    line.classList.add("lineErase");
    h1span.classList.add("headingRemove");
    nuke.classList.add("nukeRemove");
    removeBeginbtn.style.display = 'none'
    removebegintext.style.display = 'none'

    setTimeout(() => {
        elementsToRemove.forEach(className => {
            var elements = document.getElementsByClassName(className);
            Array.from(elements).forEach(element => {
                element.remove();
            });
        });

    }, 3000);

    // Adding Start page elements
    setTimeout(() => {

        var headDesign1 = document.createElement("img");
        headDesign1.src = "svgs/Startsvgs/headDesign1.svg";
        headDesign1.alt = "headDesign1";
        headDesign1.className = "headDesign1";
        elem.appendChild(headDesign1);

        var headDesign2 = document.createElement("img");
        headDesign2.src = "svgs/Startsvgs/headDesign2.svg";
        headDesign2.alt = "headDesign2";
        headDesign2.className = "headDesign2";
        elem.appendChild(headDesign2);

        var coverheadDesign1 = document.createElement("div");
        coverheadDesign1.className = "coverheadDesign1"
        elem.appendChild(coverheadDesign1);

        var coverheadDesign2_1 = document.createElement("div");
        coverheadDesign2_1.className = "coverheadDesign2-1"
        elem.appendChild(coverheadDesign2_1);

        var coverheadDesign2_2 = document.createElement("div");
        coverheadDesign2_2.className = "coverheadDesign2-2"
        elem.appendChild(coverheadDesign2_2);

        var Circle = document.createElement("div");
        Circle.className = "circle";
        elem.appendChild(Circle);

        var outerCircle = document.createElement("img");
        outerCircle.src = "svgs/Startsvgs/Outer Circle.svg";
        outerCircle.className = "outerCircle";
        Circle.appendChild(outerCircle);

        var whiteCircle = document.createElement("img");
        whiteCircle.src = "svgs/Startsvgs/White Circle.svg";
        whiteCircle.className = "whiteCircle";
        Circle.appendChild(whiteCircle);

        var blueDashedStrips = document.createElement("img");
        blueDashedStrips.src = "svgs/Startsvgs/blue dashed strips.svg";
        blueDashedStrips.className = "blueDashedStrips";
        Circle.appendChild(blueDashedStrips);

        var ArrowCircle = document.createElement("img");
        ArrowCircle.src = "svgs/Startsvgs/Arrow circle.svg";
        ArrowCircle.className = "ArrowCircle";
        Circle.appendChild(ArrowCircle);

        var innerThinWhiteCircle = document.createElement("img");
        innerThinWhiteCircle.src = "svgs/Startsvgs/inner thin white circle.svg";
        innerThinWhiteCircle.className = "innerThinWhiteCircle";
        Circle.appendChild(innerThinWhiteCircle);

        var innerAimCircle = document.createElement("img");
        innerAimCircle.src = "svgs/Startsvgs/inner aim circle.svg";
        innerAimCircle.className = "innerAimCircle";
        Circle.appendChild(innerAimCircle);

        var CrosshairCircle = document.createElement("img");
        CrosshairCircle.src = "svgs/Startsvgs/Crosshair Circle.svg";
        CrosshairCircle.className = "CrosshairCircle";
        Circle.appendChild(CrosshairCircle);

        var mainText = document.createElement("div");
        mainText.className = "mainText";
        elem.appendChild(mainText);

        var coverMainText = document.createElement("div");
        coverMainText.className = "coverMainText";
        mainText.appendChild(coverMainText);

        var coverSubText = document.createElement("div");
        coverSubText.className = "coverSubText";
        mainText.appendChild(coverSubText);

        var JarvisText = document.createElement("img");
        JarvisText.src = "svgs/Startsvgs/Jarvis Text.svg";
        JarvisText.alt = "Jarvis Text";
        JarvisText.className = "JarvisText";
        mainText.appendChild(JarvisText);

        var QuizText = document.createElement("img");
        QuizText.src = "svgs/Startsvgs/Quiz Text.svg";
        QuizText.alt = "Quiz Text";
        QuizText.className = "QuizText";
        mainText.appendChild(QuizText);

        var startButton = document.createElement("div");
        startButton.className = "startButton";
        elem.appendChild(startButton);

        var cover2 = document.createElement("div");
        cover2.className = "cover2";
        startButton.appendChild(cover2);

        var cover1 = document.createElement("div");
        cover1.className = "cover1";
        startButton.appendChild(cover1);

        var StartButtonShape = document.createElement("img");
        StartButtonShape.src = "svgs/Startsvgs/Button.svg"
        StartButtonShape.className = "StartButtonShape";
        StartButtonShape.alt = "StartButtonShape";
        startButton.appendChild(StartButtonShape);

        var StartButtonBg = document.createElement("img");
        StartButtonBg.src = "svgs/Startsvgs/StartButtonBg.svg"
        StartButtonBg.className = "StartButtonBg";
        StartButtonBg.alt = "StartButtonBg";
        startButton.appendChild(StartButtonBg);

        var StartButtonText = document.createElement("img");
        StartButtonText.src = "svgs/Startsvgs/StartText.svg"
        StartButtonText.className = "StartButtonText";
        StartButtonText.alt = "StartButtonText";
        startButton.appendChild(StartButtonText);

        var nukebtn = document.createElement("img");
        nukebtn.src = "svgs/Beginsvgs/nukeObject.svg"
        nukebtn.className = "nukebtn";
        nukebtn.alt = "nukebtn";
        startButton.appendChild(nukebtn);

        var cover3 = document.createElement("div");
        cover3.className = "cover3";
        startButton.appendChild(cover3);

        // Start Page Remove

        var disappearNukebtn = document.getElementsByClassName("nukebtn")[0];
        var disappearStartButtonBg = document.getElementsByClassName("StartButtonBg")[0];
        var disappearStartButtonText = document.getElementsByClassName("StartButtonText")[0];
        var startButton = document.getElementsByClassName("startButton")[0];
        var removeStartBtn = document.getElementsByClassName("cover1")[0];
        var removecoverSubText = document.getElementsByClassName("coverSubText")[0];
        var removecoverMainText = document.getElementsByClassName("coverMainText")[0];
        var disappearheadDesign2_1 = document.getElementsByClassName("coverheadDesign2-1")[0];
        var disappearheadDesign2_2 = document.getElementsByClassName("coverheadDesign2-2")[0];
        var disappearheadDesign1 = document.getElementsByClassName("coverheadDesign1")[0];

        startButton.addEventListener('click', handleClick);
        function handleClick() {

            e.preventDefault();

            startButton.removeEventListener("click", handleClick);

            disappearNukebtn.classList.add("disappearNukebtn");
            disappearStartButtonBg.classList.add("disappearStartButtonBg");
            disappearStartButtonText.classList.add("disappearStartButtonText");
            removeStartBtn.classList.add("removeStartBtn");
            removecoverSubText.classList.add("removecoverSubText");
            removecoverMainText.classList.add("removecoverMainText");
            disappearheadDesign2_1.classList.add("disappearheadDesign2-1");
            disappearheadDesign2_2.classList.add("disappearheadDesign2-2");
            disappearheadDesign1.classList.add("disappearheadDesign1");
            setTimeout(() => {
                elementsToRemoveStartPage.forEach(className => {
                    var elements = document.getElementsByClassName(className);
                    Array.from(elements).forEach(element => {
                        element.remove();
                    });
                });

            }, 3300);

            //Adding Question page
            setTimeout(() => {
                var HeadQuestionDesign = document.createElement("img");
                HeadQuestionDesign.src = "svgs/Questionsvgs/HeadQuestionDesign.svg";
                HeadQuestionDesign.alt = "HeadQuestionDesign";
                HeadQuestionDesign.className = "HeadQuestionDesign";
                elem.appendChild(HeadQuestionDesign);

                var section = document.createElement("section");
                elem.appendChild(section);

                var questionBlock = document.createElement("div");
                questionBlock.className = "questionBlock"
                section.appendChild(questionBlock)

                var QuestionText = document.createElement("img");
                QuestionText.src = "svgs/Questionsvgs/QuestionText.svg";
                QuestionText.alt = "QuestionText";
                QuestionText.className = "QuestionText";
                questionBlock.appendChild(QuestionText);

                var QuestionNumberCircle = document.createElement("img");
                QuestionNumberCircle.src = "svgs/Questionsvgs/QuestionNumberCircle.svg";
                QuestionNumberCircle.alt = "QuestionNumberCircle";
                QuestionNumberCircle.className = "QuestionNumberCircle";
                questionBlock.appendChild(QuestionNumberCircle);

                var OuterQuestionBlock = document.createElement("img");
                OuterQuestionBlock.src = "svgs/Questionsvgs/OuterQuestionBlock.svg";
                OuterQuestionBlock.alt = "OuterQuestionBlock";
                OuterQuestionBlock.className = "OuterQuestionBlock";
                questionBlock.appendChild(OuterQuestionBlock);

                var InnerQuestionBlock = document.createElement("img");
                InnerQuestionBlock.src = "svgs/Questionsvgs/InnerQuestionBlock.svg";
                InnerQuestionBlock.alt = "InnerQuestionBlock";
                InnerQuestionBlock.className = "InnerQuestionBlock";
                questionBlock.appendChild(InnerQuestionBlock);

                var QuestionContent = document.createElement("p");
                QuestionContent.className = "QuestionContent";
                questionBlock.appendChild(QuestionContent);

                aside = document.createElement("aside");
                elem.appendChild(aside)

                optionBlock = document.createElement("div");
                optionBlock.className = "optionBlock";
                aside.appendChild(optionBlock);

                var o1 = document.createElement("input");
                o1.type = "radio";
                o1.name = "options";
                o1.id = "o1";
                o1.className = "options"
                optionBlock.appendChild(o1);

                var o2 = document.createElement("input");
                o2.type = "radio";
                o2.name = "options";
                o2.id = "o2";
                o2.className = "options"
                optionBlock.appendChild(o2);

                var o3 = document.createElement("input");
                o3.type = "radio";
                o3.name = "options";
                o3.id = "o3";
                o3.className = "options"
                optionBlock.appendChild(o3);

                var o4 = document.createElement("input");
                o4.type = "radio";
                o4.name = "options";
                o4.id = "o4";
                o4.className = "options"
                optionBlock.appendChild(o4);

                var label1 = document.createElement("label");
                label1.setAttribute("for", "o1");
                label1.className = "labelClick";
                optionBlock.appendChild(label1);

                var optionText1 = document.createElement("p");
                optionText1.className = "optionText1";
                label1.appendChild(optionText1);

                var Option1 = document.createElement("img");
                Option1.src = "svgs/Questionsvgs/Option1.svg";
                Option1.alt = "Option1";
                Option1.className = "Option1";
                label1.appendChild(Option1);

                var optionCircle1 = document.createElement("div");
                optionCircle1.className = "optionCircle1"
                optionBlock.appendChild(optionCircle1);


                var label2 = document.createElement("label");
                label2.setAttribute("for", "o2");
                label2.className = "labelClick";
                optionBlock.appendChild(label2);

                var optionText2 = document.createElement("p");
                optionText2.className = "optionText2";
                label2.appendChild(optionText2);

                var Option2 = document.createElement("img");
                Option2.src = "svgs/Questionsvgs/Option2.svg";
                Option2.alt = "Option2";
                Option2.className = "Option2";
                label2.appendChild(Option2);

                var optionCircle2 = document.createElement("div");
                optionCircle2.className = "optionCircle2"
                optionBlock.appendChild(optionCircle2);

                var label3 = document.createElement("label");
                label3.setAttribute("for", "o3");
                label3.className = "labelClick";
                optionBlock.appendChild(label3);

                var optionText3 = document.createElement("p");
                optionText3.className = "optionText3";
                label3.appendChild(optionText3);

                var Option3 = document.createElement("img");
                Option3.src = "svgs/Questionsvgs/Option3.svg";
                Option3.alt = "Option3";
                Option3.className = "Option3";
                label3.appendChild(Option3);

                var optionCircle3 = document.createElement("div");
                optionCircle3.className = "optionCircle3"
                optionBlock.appendChild(optionCircle3);

                var label4 = document.createElement("label");
                label4.setAttribute("for", "o4");
                label4.className = "labelClick";
                optionBlock.appendChild(label4);

                var optionText4 = document.createElement("p");
                optionText4.className = "optionText4";
                label4.appendChild(optionText4);

                var Option4 = document.createElement("img");
                Option4.src = "svgs/Questionsvgs/Option4.svg";
                Option4.alt = "Option4";
                Option4.className = "Option4";
                label4.appendChild(Option4);

                var optionCircle4 = document.createElement("div");
                optionCircle4.className = "optionCircle4"
                optionBlock.appendChild(optionCircle4);

                var NextButton = document.createElement("img");
                NextButton.src = "svgs/Questionsvgs/Next Button.svg";
                NextButton.alt = "NextButton";
                NextButton.className = "NextButton";
                optionBlock.appendChild(NextButton);

                var footer = document.createElement("footer");
                elem.appendChild(footer);

                var progressBar = document.createElement("div");
                progressBar.className = "progressBar";
                footer.appendChild(progressBar);

                for (let i = 1; i <= 15; i++) {
                    var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    svgElement.setAttribute("class", "hexagon");
                    svgElement.setAttribute("viewBox", "0 0 100 100");
                    progressBar.appendChild(svgElement);

                    var polygonElement = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
                    polygonElement.setAttribute("points", "50,0 100,25 100,75 50,100 0,75 0,25");
                    svgElement.appendChild(polygonElement);
                }
                let questionNo = 1;
                let noText = document.createElement("h1");
                noText.className = "noText";
                if (questionNo == 1) {
                    noText.classList.add('appearNoText');
                }
                questionBlock.appendChild(noText);
                const displayNo = () => {
                    if (questionNo > 9) {
                        noText.classList.remove('appearNoText');
                        noText.innerHTML = questionNo;
                    } else if (questionNo < 9 && questionNo > 1) {
                        noText.classList.remove('appearNoText');
                        noText.innerHTML = "0" + questionNo;
                    } else {
                        noText.innerHTML = "0" + questionNo;
                    }
                    questionBlock.appendChild(noText);
                }
                displayNo()

                const optionInputsNo = document.querySelectorAll('.options');

                const getAnswerNo = () => {
                    let answerIndex;
                    optionInputsNo.forEach(
                        (input, index) => {
                            if (input.checked) {
                                answerIndex = index;
                            }
                        }
                    )
                    return answerIndex;
                }
                const noIncrement = () => {
                    const ansIndexNo = getAnswerNo();
                    if (ansIndexNo !== undefined && ansIndexNo !== null) {
                        if (questionNo < 15) {
                            questionNo++;
                        }
                        displayNo();
                        fillHexFunction(questionNo)
                    } else {
                        fillHexFunction(questionNo)
                        displayNo();
                    }
                }
                const fillHexFunction = (questionNo) => {
                    let hexagons = document.querySelectorAll('.progressBar .hexagon');
                    for (let i = 0; i < hexagons.length; i++) {
                        if (i < questionNo) {
                            hexagons[i].classList.add('whiteFillHex');
                        }
                    }
                };
                let NextButtonClick = document.getElementsByClassName("NextButton")[0];
                NextButtonClick.addEventListener('click', (e) => {
                    let noTextElem = document.querySelector('.noText');
                    if (noTextElem) {
                        noTextElem.remove();
                    }
                    noIncrement();
                });
            }, 3300);
            setTimeout(() => {

                const questions = [
                    {
                        'que': ' Who developed Python Programming Language?',
                        'a': 'Wick Rossum',
                        'b': 'Rasmus Lerdorf',
                        'c': 'Guido Rossum',
                        'd': 'Niene Stom',
                        'correct': 'c'
                    },
                    {
                        'que': 'Which type of Programming does Python support?',
                        'a': 'OOP',
                        'b': 'structured',
                        'c': 'functional',
                        'd': 'All of them',
                        'correct': 'd'
                    },
                    {
                        'que': 'Which of the following is the correct extension of the Python file?',
                        'a': '.python',
                        'b': '.pl',
                        'c': '.py',
                        'd': '.p',
                        'correct': 'c'
                    },
                    {
                        'que': `What will be the value of the following Python expression? 
                        
                        4 + 3 % 5`,
                        'a': '7',
                        'b': '2',
                        'c': '4',
                        'd': '1',
                        'correct': 'a'
                    },
                    {
                        'que': 'Which of the following is used to define a block of code in Python language?',
                        'a': 'Indentation',
                        'b': '{}',
                        'c': '()',
                        'd': 'none',
                        'correct': 'a'
                    },
                    {
                        'que': 'Which keyword is used for function in Python language?',
                        'a': 'function',
                        'b': 'def',
                        'c': 'func',
                        'd': 'define',
                        'correct': 'b'
                    },
                    {
                        'que': 'Which of the following character is used to give single-line comments in Python?',
                        'a': '//',
                        'b': '#',
                        'c': '!',
                        'd': '/*',
                        'correct': 'b'
                    },
                    {
                        'que': 'Python supports the creation of anonymous functions at runtime, using a construct called',
                        'a': 'pi',
                        'b': 'anonymous',
                        'c': 'lambda',
                        'd': 'none',
                        'correct': 'c'
                    },
                    {
                        'que': `What will be the output of the following Python function?
                        
                        min(max(False,-3,-4), 2,7)`,
                        'a': '-4',
                        'b': '-3',
                        'c': '2',
                        'd': 'False',
                        'correct': 'd'
                    },
                    {
                        'que': `2**(3**2)
                        (2**3)**2
                        2**3**2`,
                        'a': '512, 64, 512',
                        'b': '512, 512, 512',
                        'c': '64, 512, 64',
                        'd': '64, 64, 64',
                        'correct': 'a'
                    },
                    {
                        'que': 'Which of the following is the truncation division operator in Python?',
                        'a': '//',
                        'b': '|',
                        'c': '/',
                        'd': '%',
                        'correct': 'a'
                    },
                    {
                        'que': 'Which keyword is used to create empty function?',
                        'a': 'pending',
                        'b': 'left',
                        'c': 'pass',
                        'd': 'continue',
                        'correct': 'c'
                    },
                    {
                        'que': 'Which method is used to add new element in a list?',
                        'a': 'add()',
                        'b': 'append()',
                        'c': 'addEnd()',
                        'd': 'index()',
                        'correct': 'b'
                    },
                    {
                        'que': 'What is the maximum possible length of an identifier in Python?',
                        'a': '79',
                        'b': '31',
                        'c': '63',
                        'd': 'none',
                        'correct': 'd'
                    },
                    {
                        'que': `What will be the output of the following Python expression?
                        
                        round(4.576)`,
                        'a': '4',
                        'b': '4.6',
                        'c': '5',
                        'd': '4.5',
                        'correct': 'c'
                    },
                ];

                let index = 0;
                let total = questions.length;
                let right = 0,
                    wrong = 0;
                const questionTextContent = document.getElementsByClassName("QuestionContent")[0];
                const optionInputs = document.querySelectorAll('.options');
                const optionText1 = document.getElementsByClassName("optionText1")[0];
                const optionText2 = document.getElementsByClassName("optionText2")[0];
                const optionText3 = document.getElementsByClassName("optionText3")[0];
                const optionText4 = document.getElementsByClassName("optionText4")[0];
                const loadQuestion = () => {
                    if (index === total) {
                        return endQuiz();
                    } else {
                        reset();
                    }
                    const data = questions[index]
                    questionTextContent.innerText = `${data.que}`;
                    optionText1.innerText = data.a;
                    optionText2.innerText = data.b;
                    optionText3.innerText = data.c;
                    optionText4.innerText = data.d;
                }

                const submitQuiz = () => {
                    const ansIndex = getAnswer();
                    const data = questions[index];
                    if (ansIndex !== undefined && ansIndex !== null) {
                        if (ansIndex === data.correct.charCodeAt(0) - 'a'.charCodeAt(0)) {
                            right++;
                            console.log(right);
                        } else {
                            wrong++;
                        }
                    } else {
                        submitQuiz();
                    }
                    index++;
                    loadQuestion();
                }

                const getAnswer = () => {
                    let answerIndex;
                    optionInputs.forEach(
                        (input, index) => {
                            if (input.checked) {
                                answerIndex = index;
                            }
                        }
                    )
                    return answerIndex;
                }

                const reset = () => {
                    optionInputs.forEach(
                        (input) => {
                            input.checked = false
                        }
                    )
                };

                const endQuiz = () => {
                    setTimeout(() => {
                        let leftContainer = document.createElement('div');
                        leftContainer.className = 'leftContainer';
                        elem.appendChild(leftContainer);

                        let rightContainer = document.createElement('div');
                        rightContainer.className = 'rightContainer';
                        elem.appendChild(rightContainer);
                        setTimeout(() => {
                            leftContainer.classList.add('leftContainerMove');
                            rightContainer.classList.add('rightContainerMove');
                        }, 100)
                    }, 10)

                    setTimeout(() => {
                        elementsToRemoveQuestionPage.forEach(className => {
                            var elements = document.getElementsByClassName(className);
                            // Loop through all elements with the specified class and remove them
                            Array.from(elements).forEach(element => {
                                element.remove();
                            });
                        });

                    }, 2300);


                    setTimeout(() => {
                        section = document.getElementsByTagName("SECTION")[0];
                        let outermostStrokeCircleDiv = document.createElement('div');
                        outermostStrokeCircleDiv.className = "outermostStrokeCircleDiv";
                        section.appendChild(outermostStrokeCircleDiv);

                        let outermostStrokeCircle = document.createElement('img');
                        outermostStrokeCircle.src = "./svgs/Resultsvgs/outermostStrokeCircle.svg";
                        outermostStrokeCircle.alt = "outermostStrokeCircle";
                        outermostStrokeCircle.className = "outermostStrokeCircle";
                        outermostStrokeCircleDiv.appendChild(outermostStrokeCircle);

                        let innermostStrokeCircleDiv = document.createElement('div');
                        innermostStrokeCircleDiv.className = "innermostStrokeCircleDiv";
                        section.appendChild(innermostStrokeCircleDiv);

                        let innermostStrokeCircle = document.createElement('img');
                        innermostStrokeCircle.src = "./svgs/Resultsvgs/innermostStrokeCircle.svg"
                        innermostStrokeCircle.alt = 'innermostStrokeCircle';
                        innermostStrokeCircle.className = "innermostStrokeCircle";
                        innermostStrokeCircleDiv.appendChild(innermostStrokeCircle);

                        let ResultText = document.createElement('img');
                        ResultText.src = "./svgs/Resultsvgs/ResultText.svg";
                        ResultText.alt = "ResultText";
                        ResultText.className = "ResultText";
                        section.appendChild(ResultText);

                        let ResultBracketLeft = document.createElement('img');
                        ResultBracketLeft.src = "./svgs/Resultsvgs/ResultBracket.svg";
                        ResultBracketLeft.alt = "ResultArea";
                        ResultBracketLeft.className = "ResultBracketLeft";
                        section.appendChild(ResultBracketLeft);

                        let ResultBracketRight = document.createElement('img');
                        ResultBracketRight.src = "./svgs/Resultsvgs/ResultBracket.svg";
                        ResultBracketRight.alt = "ResultArea";
                        ResultBracketRight.className = "ResultBracketRight";
                        section.appendChild(ResultBracketRight);

                        let resultDigits = document.createElement('span');
                        resultDigits.className = "resultDigits";
                        resultDigits.classList.add('num');
                        resultDigits.setAttribute("dataVal", 10);
                        section.appendChild(resultDigits);

                        const counter = (start, end) => {
                            let currentValue = start;
                            const interval = 1000 / (end - start);

                            const displayValue = () => {
                                let dValue = `${currentValue}`;
                                if (dValue <= 9) {
                                    dValue = `0${currentValue}`
                                }
                                return dValue;
                            }

                            const incrementCounter = () => {
                                currentValue++;
                                dValue = displayValue();
                                if (currentValue <= end) {
                                    document.querySelector('.resultDigits').textContent = dValue + '/15'; // Update the displayed value
                                } else {
                                    clearInterval(counterInterval);
                                }
                            };

                            const counterInterval = setInterval(incrementCounter, interval);
                        };

                        counter(0, right);


                    }, 2400);
                }

                loadQuestion();

                let NextButtonClick = document.getElementsByClassName("NextButton")[0];
                NextButtonClick.addEventListener('click', (e) => {
                    submitQuiz();
                });
            }, 3500);
        };
    }, 3010);
});
