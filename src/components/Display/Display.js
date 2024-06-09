import React from 'react';
import './display.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CronParser } from '../../utilities/CronParser'; 



function Display({ cronExpression }) {

  const handleSaveButtonClick = () => {
    if (CronParser.isValidCronExpression(cronExpression)) {
      toast.success( 'Валидация CRON строки прошла успешно. Сохраняем...', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
     

    } else {
      toast.error( 'Ошибка валидации CRON строки, попробуйте еще раз.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });    }

  };

  const handleCopyButtonClick = () => {
    navigator.clipboard.writeText(cronExpression);
    toast.success('CRON строка скопирована', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleDownload = () => {
      toast.warning( 'В рамках задачи данный функционал не имплементирован.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });    

  }
  
  return (
    <div className='main_display'>
      <div className='button_box'>
        <button className='two_buttons' onClick={handleSaveButtonClick}>Сохранить</button>
        <button className='two_buttons' onClick={handleDownload}>Загрузить</button>
      </div>

      <div className='expression'>
        <p id='expression_field' contentEditable="true">{cronExpression}</p>
      </div>

      <div className='expression'>
        <p>{CronParser.cronExpressionToHumanReadable(cronExpression)}</p>
      </div> 

      <button className='two_buttons' id='copy_button' onClick={handleCopyButtonClick}> Копировать строку</button>
      <p id='check_link'>Проверить полученную строку можно по <a href="https://crontab.cronhub.io/">ссылке</a>.</p>
      <ToastContainer/>
    </div>
  );
}

export default Display;
