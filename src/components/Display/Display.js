import React ,{useContext,useState,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { CronParser } from '../../utilities/CronParser'; 
import CronContext from '../../context/CronExpressionContext';
import 'react-toastify/dist/ReactToastify.css';
import './display.css'



function Display() {
  const {cronExpression,updateCronExpression} = useContext(CronContext);
  const [humanReadableExpression, setHumanReadableExpression] = useState('');

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

  const handleExpressionEdit = (e) => {
    const selection = window.getSelection();
    const cursorOffset = selection.focusOffset; // Store cursor position
  
    const newCronExpression = e.target.textContent;
    updateCronExpression(newCronExpression);
  
    setTimeout(() => {
      selection.collapse(e.target.firstChild, cursorOffset); // Set cursor position
    }, 0);
  };

  useEffect(() => {
    setHumanReadableExpression(CronParser.cronExpressionToHumanReadable(cronExpression));
  }, [cronExpression]);


  

  return (
    <div className='main_display'>
      <div className='button_box'>
        <button className='two_buttons' onClick={handleSaveButtonClick}>Сохранить</button>
        <button className='two_buttons' onClick={handleDownload}>Загрузить</button>
        
      </div>
      <p id='check_link'>Вы можете свободно редактировать CRON строку</p>
      <div className='expression'>
        <p 
        id='expression_field' 
        contentEditable="true"
        onInput={handleExpressionEdit}
        >{cronExpression}</p>
      </div>

      <div className='expression'>
        <p >{humanReadableExpression}</p>
      </div> 

      <button className='two_buttons' id='copy_button' onClick={handleCopyButtonClick} style={{marginBottom:'20px'}}> Копировать строку</button>
      <ToastContainer/>
    </div>
  );
}

export default Display;
