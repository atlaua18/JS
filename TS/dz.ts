interface ISome {
    howIDoIt: string;
    simeArray: Array<string | number>;
    withData: Array<IWithData>;
}

class MyHomework implements ISome {
    howIDoIt: "I Do It Well";
    simeArray: ["srting one", "string two", 42];
    withData: [{howIDoIt: "I Do It Well", simeArray: ["string one", 23]}];
}

interface IWithData {
    howIDoIt: string;
    simeArray: Array<string | number>;
}