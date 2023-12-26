  Feature: Probar la funcionalidad de Hiraoka

   Scenario: Como usuario nuevo ingreso a Hiraoka a realizar una compra
      Given Ingreso a la pagina hiraoka
      When Selecciono categoria Eletrohogar
      And Selecciono Electrodomesticos Refrigeradora
      And Selecciono el menu Marca
      And Selecciono Marca LG
      And Selecciono Primer articulo
      And Aniado al carrito
      And Busco Televisores smart
      And click boton buscar
      And Aniado al carro el primer articulo encontrado
      And Ir al Carrito
      And Selecciono comprar
      And Selecciono Compra como Cliente Nuevo
      And Llenar Datos de Cliente Nuevo 

    Scenario: Como usuario registrado ingreso a Hiraoka a realizar una compra
    Given Ingreso a la pagina hiraoka
    And Busco Televisores smart
    And click boton buscar
    And Aniado al carro el primer articulo encontrado
    And Ir al Carrito
    And Selecciono comprar
    And Ingreso datos de usuario registrado

    Scenario: Validacion de datos en el registro de usuario
    Given Ingreso a la pagina hiraoka
    When Selecciono la opción Ingresar
    And Seleciono la opción Registrarme
    And Lleno datos para validar 
    Then Datos correctos - MODIFICADO
