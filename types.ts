type Editor = {
    mode: "view" | "edit";   //Вынести в тип 
    //history
    palette: Palette;
    selectedSlides: Array<Identifier>;  //консистентный тип
    selectedContents: Array<Identifier>;
    presentation: Presentation;
}

type selectedItems = {
    //консистентный тип
}

type Identifier = string;

type Palette = {
    currentColor: string;
    colorList: Array<string>; /*здесь перечислим цвета */
}

type Presentation = {
    title: string;
    slideList: Array<Slide>;
}

type Slide = {
    id: Identifier;
    background: Background;
    contentList: Array<Content>; 
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

type ContentType = { //расписать по примеру Бэкграунд
    value: "image" | "primitive" | "text";
        image: Image; 
        primitive: Primitive;
        text: Message;
}

type Image = {
    imageType: "png" | "jpg";
    imagePath: string;
}

type Primitive = {
    type: "circle" | "triangle" | "rectangle";
    circle: Circle; 
    triangle: Triangle; 
    rectangle: Rectangle;
}

type Point = {
    x: number;
    y: number;
}

type Circle =  { //избавится от Сёркла, Трингла и Регтангла
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

type Message = {
    value: string;
    fontFamily: string;
    fontColor: string;
    fontSize: number;
    fontStyle: "italic" | "bold" | "underline"; //вынести в тип
}   

// Export
// Undo
// Redo
// Transform