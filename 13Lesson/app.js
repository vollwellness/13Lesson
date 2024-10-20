/* Добавить кнопку "Изменить цвет",
 которая при клике будет менять цвет фона
  всей страницы на случайный цвет.*/

  const textElement = document.getElementById('text');
        const readMoreBtn = document.getElementById('readMoreBtn');
        const changeColorBtn = document.getElementById('changeColorBtn');

        const additionalParagraphs = [
            `<p id="paragraph2"> Дед бил, бил — не разбил. Баба била, била — не разбила.</p>`,
            `<p id="paragraph3"> Мышка бежала, хвостиком задела, яичко упало и разбилось.</p>`,
            `<p id="paragraph4"> Дед плачет, баба плачет, а курочка кудахчет: — Не плачь, дед, 
                                 не плачь, баба: снесу вам яичко не золотое — простое.</p>`
        ];

        let currentParagraphIndex = 0; 

        readMoreBtn.addEventListener('click', () => {
            if (currentParagraphIndex < additionalParagraphs.length) {
                textElement.innerHTML += additionalParagraphs[currentParagraphIndex];
                currentParagraphIndex++;
            }
        });

        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        changeColorBtn.addEventListener('click', () => {
            document.body.style.backgroundColor = getRandomColor();
        });