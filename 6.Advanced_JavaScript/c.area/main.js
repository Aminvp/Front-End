function getAreaFunctions(shapes){
    const pi = Math.PI;
    var ls={
      "square":square,
      "circle":circle,
      "rectangle":rectangle,
      "triangle":triangle
    }
    function circle(r){
      return pi*(r**2);
    };
    function square(x){
      return x*x;
    };
    function rectangle(x,y){
      return x*y;
    };
    function triangle(x,h){
      return (x*h)/2;
    };
    var res=[]
    for (let i=0;i<shapes.length;++i){
      res.push(ls[shapes[i]]);
    }
    return res;
  }
  
  export default getAreaFunctions;
  // ######################################
  const SHAPES = {
      square: (a) => a * a,
      circle: (r) => Math.PI * r * r,
      triangle: (a, h) => (a * h) / 2,
      rectangle: (a, b) => a * b,
  };
  
  function getAreaFunctions(shapes) {
      return shapes.map((shape) => SHAPES[shape]);
  }
  
  export default getAreaFunctions;
  