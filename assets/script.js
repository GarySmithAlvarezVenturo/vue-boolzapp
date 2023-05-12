// Milestone 1
// ●	Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// ●	Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
// Milestone 2
// ●	Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// ●	Click sul contatto mostra la conversazione del contatto cliccato
// Milestone 3
// ●     Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// ●     Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
// Milestone 4
// ●     Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
// Milestone 5 - opzionale
// ●     Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
// ●     Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti 


var app = new Vue(
    {
        el: '#root',
        data: {
            contacts: [
                {
                    name: 'Iron Man',
                    avatar: 'img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        },
                    ],
                },
                {
                    name: 'Captain America',
                    avatar: 'img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Loki',
                    avatar: 'img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Wonder Woman',
                    avatar: 'img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Wanda Vision',
                    avatar: 'img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            text: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Rocket',
                    avatar: 'img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Star Lord',
                    avatar: 'img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            text: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ], 

            currentContact: 0,  
            currentMessage: null,   
            messageText: "",    
            search: "",     //campo vuoto ricerca contatti        
        },
        methods: {
             setIndexContact: function(position) {
                this.currentContact = position;
                return this.currentContact;
            },
            newMessage: function(contact) {
                let newSentMessage = {
                    date: this.currentDate,
                    text: this.messageText,
                    status: 'sent'
                };

                this.contacts[contact].messages.push(newSentMessage);

                this.messageText = "";

                setTimeout(
                    ()=> {
                        let newReceivedMessage = {
                            date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                            text: "Ok",
                            status: 'received'
                        };

                        this.filteredContacts[contact].messages.push(newReceivedMessage);

                    },1000
                );
            },
           setIndexMessage: function(position) {
                this.currentMessage = position
                return this.currentMessage;
            },

            removeIndexMessage: function () {
                this.currentMessage = null;
                return this.currentMessage;
            },
            
            // Cancellare messaggio
            deleteMessage: function(position,messagePosition) {
                this.filteredContacts[position].messages.splice(messagePosition,1);
            },
    
        },
        // function search contact
        computed: {
            filteredContacts() {
                return this.contacts.filter(
                    element => {
                        return element.name.toLocaleLowerCase().includes(this.search.toLowerCase());
                    }
                );
            }
        }
    }
);