// Test suite para los componentes de layout de la landing page
describe('Layout Components Tests', () => {
    // Setup - Se ejecuta antes de cada test
    beforeEach(() => {
        document.body.innerHTML = `
            <aside class="sidebar">
                <nav class="sidebar-menu">
                    <ul>
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#servicios">Servicios</a></li>
                        <li><a href="#nosotros">Nosotros</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
                </nav>
            </aside>
            <main class="main-content">
                <section id="inicio">
                    <h1>Bienvenido</h1>
                </section>
                <section id="contacto">
                    <form id="contactForm">
                        <input type="text" id="name" required>
                        <input type="email" id="email" required>
                        <textarea id="message" required></textarea>
                        <button type="submit">Enviar</button>
                    </form>
                </section>
            </main>
        `;
    });

    describe('Sidebar Tests', () => {
        test('El menú lateral debe existir', () => {
            const sidebar = document.querySelector('.sidebar');
            expect(sidebar).not.toBeNull();
        });

        test('El menú debe tener 4 elementos', () => {
            const menuItems = document.querySelectorAll('.sidebar-menu li');
            expect(menuItems.length).toBe(4);
        });
    });

    describe('Contact Form Tests', () => {
        test('El formulario de contacto debe tener los campos necesarios', () => {
            const form = document.getElementById('contactForm');
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            expect(form).not.toBeNull();
            expect(nameInput).not.toBeNull();
            expect(emailInput).not.toBeNull();
            expect(messageInput).not.toBeNull();
        });

        test('El campo email debe validar el formato correcto', () => {
            const emailInput = document.getElementById('email');
            
            emailInput.value = 'correo-invalido';
            expect(emailInput.checkValidity()).toBeFalsy();

            emailInput.value = 'correo@valido.com';
            expect(emailInput.checkValidity()).toBeTruthy();
        });

        test('Los campos del formulario deben ser obligatorios', () => {
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            expect(nameInput.required).toBeTruthy();
            expect(emailInput.required).toBeTruthy();
            expect(messageInput.required).toBeTruthy();
        });
    });
}); 