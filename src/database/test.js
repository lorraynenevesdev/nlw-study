const Database = require('./db')
const createProffy = require('./createProffy')
// const { catch } = require('./db')


Database.then(async (db) => {
    //inserir dados

    proffyValue = {
        name:"Érico de Oliveira", 
        avatar:"https://media-exp1.licdn.com/dms/image/C4E03AQHJbC5Dkfbusg/profile-displayphoto-shrink_200_200/0?e=1602720000&v=beta&t=_SeZbYfHdKrH8Qc2Md3k1BOS3whypY27dev1MMyvj6Y", 
        whatsapp:"000000", 
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
         
    }

    classValue = {
        subject: 1,
        cost:"20",
        // o proffy_id virá do banco de dados 
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        },
    ]

    
        // await createProffy(db, {proffyValue, classValue, classScheduleValues})
        
        // consultar os dados inseridos 

        // todos os proffys

       const selectedProffys = await db.all("SELECT * FROM proffys") // quer dizer 'selecione tudo de proffys' todos os registros
        // console.log(selectedProffys)
    
        // consultar as classses de um determinado professor 
        // e trazer junto os dados do professor __ união das tabelas (o * quer dizer = a tudo)
        const selectClassesAndProffys = await db.all(`
            SELECT classes.*, proffys.*
            FROM proffys
            JOIN classes ON (classes.proffy_id = proffys.id)
            WHERE classes.proffy_id = 1;
        `)
        // console.log(selectClassesAndProffys)

        // o horário  que a pessoa trabalha por exemplo, é das 8h - 18h
        // o horário do time_from (8hs) precisa ser menor ou igual ao horário solicitado
        // o time_to precisa ser acima 
        const selectClassesSchedules = await db.all(`
            SELECT  class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = 1
            AND class_schedule.weekday = "0"
            AND class_schedule.time_from <= "420"
            AND class_schedule.time_to > "420"
        `)
        // console.log(selectClassesSchedules)
 })