const editor = {
    mode: 'view | edit'
    history: {
        currentState: integer,
        [/* массив состояний editor */]
    },
    palette: {
        currentColor: #555,
        palette: [#000, #111, ... #fff]
    }, /* */
    currentSlide: 2,
    selectedContents: [2, 3],
    selectedSlides: [2, 3],
    presentation: {
        title: 'Presentation Name',
        slideList: []
    }
}

const slidePrototype = {
    background: {
        value: backgroundImage | backgroundColor,
        backgroundImage: '', /* путь */
        backgroundColor: #fff, /* номер цвета */
    },      
    contentList: []    
}

const contentPrototype = {
    coordinateX: px,
    coordinateY: px,
    width: px | auto,
    height: px | auto,
    type: {
        value: image | primitive | text,
        image: {
            imageType: 'png | jpg',
            imagePath: ''
        },
        primitive: {
            type: circle | triangle | rectangle,
            circle: {
                strokeColor,
                fillColor,
            },
            triangle: {
                strokeColor,
                fillColor,
            },
            rectangle: {
                strokeColor,
                fillColor,
            }
        }
    }, 
    text: {
        value: '', /* текстовое поле */
        fontFamily: '', /* текстовое поле */
        fontColor: #222,
        fontSize: px,
        fontStyle: italic | bold | underline
    }   
}