

let book = {title: "인사이드 자바스크립트", price: 10000};

let copyBook = Object.assign({},book);
let copyBook1 = {...book}; // book이 가지고있는 모든 것을 가져와서 펼쳐라
let copyBook2 = {...book, ...{title: 'aaa'}}; // title이 오버라이딩