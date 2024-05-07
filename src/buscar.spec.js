describe("Buscar", () => {
  it("no encuentra proyectos cuando no tiene ninguno en la lista de proyectos", () => {
    let proyectos = [];
    expect(buscarProyectos("proyecto1", proyectos)).toEqual("");
  });
});

function buscarProyectos(nombre, proyectos){
    return "";
}