describe('Prueba', () => {
    describe('suma', () => {
        it('debe sumar dos numeros', () => {
            const suma = (a, b) => {
                return a + b;
            }

            expect(suma(1, 2)).toBe(3);
        }
        );
    })
});
