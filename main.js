
class Button {
    constructor (options) {
        const {width, height, title, parentElement} = options;

        this.button = document.createElement("div");
        this.button.style.width = `${width}px`;
        this.button.style.height = `${height}px`;
        this.button.innerHTML = title;
        this.button.addEventListener("mouseover", () => {
            this.animateMouseOverButton();
        });
        this.button.addEventListener("mouseout", () => {
            this.animateMouseLeaveButton();
        });
        this.handleButtonOnClick = this.handleButtonOnClick.bind(this);
        this.button.addEventListener("click", this.handleButtonOnClick);

this.appendToElement(parentElement);
    } 

    animateMouseOverButton() {
        this.button.style.backgroundColor = "#218294";
        this.button.style.color = "aliceblue";
        this.button.style.borderColor = "#218294"
    }

    animateMouseLeaveButton() {
        this.button.style.backgroundColor = "aliceblue";
        this.button.style.color = "#218294";
        this.button.style.borderColor = "#218294"
    }

		handleButtonOnClick() {
    		this.button.removeEventListener("click", this.handleButtonOnClick);
        this.animateButtonClick();
    }

    animateButtonClick() {
        let i = 0;
        let text = "WELCOME! This is an example of simple DOM manipulation.";
        function typing() {
            if(i < text.length) {
                document.getElementById("text").innerHTML += text.charAt(i);
                i++;
                setTimeout(typing, 100);
            }
        }
        typing();
    }

    appendToElement(element) {
        if(!(element instanceof HTMLElement)) {
            throw new Error("Перший аргумент повинен бути DOM елементом.");
        };
        element.append(this.button);
    }
}


const blueButton = new Button({
    width: 250,
    height: 60, 
    title: "Press the button!",
    parentElement: document.querySelector("#btn")
});
