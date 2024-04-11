// Получаем все кнопки "Add to corb"
var buttons = document.querySelectorAll('.main_button');
        
// Добавляем обработчик события для каждой кнопки
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Получаем id товара
        var itemId = this.closest('.products').id;
        
        // Создаем новый элемент для отображения товара в корзине
        var newItem = document.createElement('div');
        newItem.textContent = itemId;
        
        // Добавляем новый элемент в блок с корзиной
        document.getElementById('cart_items').appendChild(newItem);
    });
});