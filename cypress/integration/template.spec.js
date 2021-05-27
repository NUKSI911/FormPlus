describe("template test", () => {
  it("should contain a search  field", () => {
    cy.visit("/");
    cy.get("input[name = searchBox]")
      .type("agriculture")
      .should("have.value", "agriculture");
  });
});
