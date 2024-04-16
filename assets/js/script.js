window.onload = () => {
    try {
        const updateCopyrightYear = document.getElementById('copyright')
        const CurrentYear = new Date().getFullYear()
        // ! Update CopyRight Date
        if (CurrentYear) {
            if (document.title == "@abdrzak_ar") {
                copyRightYear_ar = updateCopyrightYear.textContent = `حقوق الطبع والنشر ${CurrentYear} `
                updateCopyrightYear.innerHTML = copyRightYear_ar + '<i class="fas fa-copyright"></i>'
            } else {

                copyRightYear_ar = updateCopyrightYear.textContent = `Copy Right ${CurrentYear} `
                updateCopyrightYear.innerHTML = copyRightYear_ar + '<i class="fas fa-copyright"></i>'

            }
        }

        let discord = document.getElementById('discord-id')
        let facebook = document.getElementById('facebook-id')
        let instagram = document.getElementById('instagram-id')
        // * Declareelements
        let elements = [{
                element: facebook,
                text: 'Thē Ghøst',
            },
            {
                element: instagram,
                text: '3bdo.gg',
            },
            {
                element: discord,
                text: '_abdrzak',
            }
        ]
        elements.forEach(({
            element,
            text,
        }) => {
            if (element) {
                element.onclick = () => {
                    navigator.clipboard.writeText(text)
                    element.classList.add('hint--top')
                    element.classList.add('hint')
                    element.classList.add('hint--animation')
                    setTimeout(() => {
                        element.classList.remove('hint--top')
                        element.classList.remove('hint')
                        element.classList.remove('hint--animation')

                    }, 5000)
                }
            }
        })
        // * Visitor Counter
        
        if (localStorage.getItem("visitorCount") === null) {
            localStorage.setItem("visitorCount", 0);
        }
        var count = parseInt(localStorage.getItem("visitorCount"));
        count += 1;
        localStorage.setItem("visitorCount", count);
        document.getElementById("visitorCount").textContent = count;
    } catch (error) {
        if (error == "TypeError: Cannot set properties of null (setting 'textContent')") console.log()
        else alert(error)
    }
}