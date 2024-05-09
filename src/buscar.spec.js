describe("Buscar", () => {
  it("no encuentra proyectos cuando no tiene ninguno en la lista de proyectos", () => {
    let proyectos = [];
    expect(buscarProyectos("proyecto1", proyectos)).toEqual("");
  });

  it("encuentra un proyecto cuando el mismo existe en una lista de 1 proyecto", () => {
    let proyectos = [];
    proyectos.push("proyecto1")
    expect(buscarProyectos("proyecto1", proyectos)).toEqual("proyecto1");
  });

  it("encuentra un proyecto cuando el mismo existe en una lista de varios proyectos", () => {
    let proyectos = [];
    proyectos.push("proyecto1");
    proyectos.push("proyecto2");
    proyectos.push("proyecto3");
    expect(buscarProyectos("proyecto2", proyectos)).toEqual("proyecto2");
  });

  it("encuentra los proyectos cuando los mismos existen en una lista de varios proyectos", () => {
    let proyectos = [];
    proyectos.push("proyecto1");
    proyectos.push("proyecto2");
    proyectos.push("proyecto3");
    proyectos.push("proyecto2");
    expect(buscarProyectos("proyecto2", proyectos)).toEqual("proyecto2, proyecto2");
  });
});

function buscarProyectos(nombre, proyectos) {
  let proyectosEncontrados = "";

  for (let i = 0; i < proyectos.length; i++) {
    if (proyectos[i] === nombre) {
      if (proyectosEncontrados !== "") {
        proyectosEncontrados += ", ";
      }
      proyectosEncontrados += proyectos[i];
    }
  }
  return proyectosEncontrados;
}
