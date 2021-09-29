Editor
    function createPresentation(): Editor {
       //...
        return newEditor;
    }

    function savePresentation(): void {
        //сохраняем json file
    }

    function openPresentation(pathFile: string): Editor {
        return newEditor;
    }

    function exportPresentation(editor: Editor): void {
        //экспортируем в pdf
    }

    function previewPresentation(): void {
        //организация демонстрации презентации
    }

    function setCurrentColor(editor: Editor, newColor: string): Editor {
        return {
            ...editor,
            palette: {
                ...editor.palette,
                currentColor: newColor        
            }
        };
    }

    function createSlide(editor: Editor): Editor {
        let newSlide: Slide = {};//здесь параметры по умолчанию
        return {
            ...editor,
            presentation: {
                ...editor.presentation,
                slideList: [
                    ...editor.presentation.slideList,
                    newSlide,
                ]
            }
        };
    }

    selectSlides
    copySlides
    removeSlides
    moveSlides
    addToHistory
    undoHistory
    redoHistory
    clearRedoHistory
    
Presentation
    setPresentationTitle
    getPresentationTitle
    setCurrentColor
    getCurrentColor

Slide
    createContent
    removeContent
    copyContent
    moveContent
    resizeContent
    setSlideBackground

Content
    insertImageToSlide
    drawPrimitiveToSlide
    insertMessageToSlide

Primitive
    drawCircle
    drawTriangle
    drawRectangle
    setStrokeColorPrimitive
    setFillColorPrimitive
    setStrokeWeightPrimitive

Message
    setValueMessage
    setFontFamilyMessage
    setColorMessage
    setSizeMessage
    setFontStyleMessage






function setPresentationTitle(newTitle: string, presentation: Presentation) {
    presentation.title = newTitle;
}

function getPresentationTitle(presentation: Presentation): string {
    return presentation.title;
}

function getCurrentColor(palette: Palette): string {
    return palette.currentColor;
}

//переключение mode editor: "view" -> "edit" или "edit" -> "view"
function toggleModeEditor(editor: Editor) {

}

//надо еще про currentSlide и currentContent написать, но со структурой не додумали