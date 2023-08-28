describe("load remote product", () => {
  it("load product-a", () => {
    cy.login("admin");
    cy.contains("Product A").click();
    cy.contains("Bem vindo, admin");
  });
});
