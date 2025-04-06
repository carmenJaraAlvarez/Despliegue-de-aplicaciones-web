# Test Structure

Este directorio contiene los tests de la landing page organizados en las siguientes categorías:

## /unit
Tests unitarios que comprueban componentes y funcionalidades individuales.
- `/components`: Tests de componentes individuales de la UI
  - `layout.test.js`: Tests del sidebar y formulario de contacto

## /integration
Tests de integración que verifican la interacción entre múltiples componentes.
(Futuros tests de integración irán aquí)

## /e2e
Tests end-to-end que comprueban flujos completos de usuario.
(Futuros tests e2e irán aquí)

## Ejecutar los tests

```bash
# Ejecutar todos los tests
npm test

# Ejecutar tests específicos
npm test test/unit/components/layout.test.js
``` 