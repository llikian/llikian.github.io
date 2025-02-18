function includeHTML() {
    let $elements = document.querySelectorAll("div[include-html]");

    for (const $element of $elements) {
        const file = $element.getAttribute("include-html");
        console.log(file);
        if (file) {
            const xhttp = new XMLHttpRequest()
            xhttp.addEventListener("readystatechange", function (event) {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        $element.innerHTML = this.responseText;
                    } else if (this.status === 404) {
                        $element.innerHTML = "Page not found.";
                    }

                    $element.removeAttribute("include-html");
                    includeHTML();
                }
            });

            xhttp.open("GET", file, true);
            xhttp.send();

            return;
        }
    }
}