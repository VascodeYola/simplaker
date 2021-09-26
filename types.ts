type Editor = {
    mode: Mode;   //Вынести в тип. Done
    //history
    palette: Palette;
    currentSlide: Slide; //мне кажется, всё-таки нужен для понимания с камим именно слайдом работаем?
    selectedSlides: Array<Identifier>;  //сюда записываются выбранные несколько слайдов    
    presentation: Presentation;
}

type Mode = "view" | "edit";

type selectedItems = {
    //консистентный тип
}

type Identifier = string; //А почему не сразу стринг там, где нужен id?

type Palette = {
    currentColor: string;
    colorList: Array<string>; //здесь перечислим цвета 
}

type Presentation = {
    title: string;
    slideList: Array<Slide>;
}

type Slide = {
    id: Identifier;
    background: Background;
    contentList: Array<Content>; 
    selectedContents: Array<Identifier>; //для записи выбранных элементов на странице
}

type BackgroundImage = {
    value: "backgroundImage";
    backgroundImage: string;
}

type BackgroundColor = {
    value: "backgroundColor";
    backgroundColor: string;
}

type Background = BackgroundImage | BackgroundColor;

type Content = {
    id: Identifier;
    coordinates: Point;
    width: number;
    height: number;
    type: ContentType;        
}

type ContentType = Image | Primitive | Message;

type Image = {
    imageType: "png" | "jpg"; //убрать расширение?
    imagePath: string;
}

type Primitive = {
    type: PrimitiveType;
/*     leftTop: Point;
    width: number;
    height: number; */
    strokeColor: string;
    fillColor: string;
    strokeWeight: number;
/* 
    circle: Circle; 
    triangle: Triangle; 
    rectangle: Rectangle; */
}

type PrimitiveType = "circle" | "triangle" | "rectangle";

type Point = {
    x: number;
    y: number;
}
//избавится от Сёркла, Трингла и Регтангла. Done

/* type Circle =  { 
    radius: number;
    center: Point;
    strokeWeight: number;
    strokeColor: string;
    fillColor: string;
}

type Triangle = {
    apex1: Point;
    apex2: Point;
    apex3: Point;
    strokeWeight: number;
    strokeColor: string;
    fillColor: string;
}

type Rectangle = {
    leftTop: Point;
    width: number;
    height: number;
    strokeWeight: number;
    strokeColor: string;
    fillColor: string;
}
 */
type Message = {
    value: string;
    fontFamily: string;
    fontColor: string;
    fontSize: number;
    fontStyle: FontStyle; //вынести в тип. Done
}   

type FontStyle = "italic" | "bold" | "underline"; 



// Export
// Undo
// Redo
// Transform