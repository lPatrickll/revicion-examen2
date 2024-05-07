describe("Buscar", () => {
  it("no encuentra proyectos cuando no tiene ninguno en la lista de proyectos", () => {
    let proyectos = [];
    expect(buscarProyectos("proyecto1", proyectos)).toEqual("");
  });

  it("no encuentra proyectos cuando no tiene ninguno en la lista de proyectos", () => {
    let proyectos = [];
    proyectos.push("proyecto1")
    expect(buscarProyectos("proyecto1", proyectos)).toEqual("proyecto1");
  });
});

function buscarProyectos(nombre, proyectos){
    if (proyectos.length === 0)
        return "";
    return nombre;
}