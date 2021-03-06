'use strict'

/**
*Функция отечающая за получение задач.
*Требуется:
*	1.Указать такой REST API URL предоставляемый RESTForms, чтобы
*	  получить задачи относящиеся к указанной категории.
*	2.Указать тип запроса.
*	3.Заполнить обьект данными полученными спомошью запроса.
*/

/*Подсказка: рекомендуется использовать query запрос типа all с фильтром*/


function getTasksAJAX(category_id)
{
	/*category_id - id категории ,к которой относятся задачи, которые требуется получить*/
	$.ajax({
        url: '', /*Сюда введите URL запроса*/
        type: '', /*Сюда введите тип запроса*/

        success: function(data) {
        	/*data - переменная содержащая в себе JSON обьект возвращённый запросом*/
        	var task_properties = Array();

    		for (var i = 0; i < data.total; i++) {
	    		task_properties[i] = {

			        id: '', /*Сюда требуется установить ID задачи*/

			        text: '', /*Сюда требуется установить название задачи*/

			        status: '' /*Сюда требуется установить значение статуса задачи*/
			        
		        }
	    	}
	    	
	    	
	    



//===================Код не относящийся к заданию==========================================
          	for (var i = 0; i < data.total; i++) {
            	addTask(task_properties[i].id, task_properties[i].text, task_properties[i].status);
          	}
            
            $("input#myInput").removeAttr('disabled');
        },
        dataType: 'json'   
    });
}
//===========================================================================================
