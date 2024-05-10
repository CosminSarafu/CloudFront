Exchange Rate App


Introducere

Aplicația realizată pentru proiect are rolul de a face conversii din diferite value monetare și poate trimite pe mail rezultatele, datorită unor API-uri publice. Această aplicație utilizează două servicii în cloud și anume: 
Exchange Rates Data API – folosit pentru a face conversia din valutele monetare; 
API SendGrid– folosit pentru a trimite pe mail informațiile cu privință la cursurile valutare;

Link-uri Github:
Front: https://github.com/CosminSarafu/CloudFront
Back: https://github.com/CosminSarafu/CloudBack

Descriere problemă
Exchange Rate- aplicația de curs valutar

Exchange Rate este platforma dumneavoastră digitală care vă realizează conversiile din diferite monede în alte valute, fiind actualizată automat zilnic rata de schimb valutar, facilitând conversiile rapide. Cu o interfață intuitivă și actualizări în timp real, utilizatorii pot accesa cu ușurință informațiile de care au nevoie pentru a lua decizii financiare informate.

Tehnologii folosite

API SendGrid - este o platformă puternică de trimitere a emailurilor, care oferă dezvoltatorilor o gamă largă de instrumente pentru a gestiona și trimite mesaje electronice în mod eficient și fiabil. Cu ajutorul API-ului SendGrid, utilizatorii pot integra ușor funcționalități avansate de trimitere a emailurilor în aplicațiile lor, inclusiv trimiterea de emailuri personalizate, gestionarea listelor de destinatari, urmărirea interacțiunilor cu emailurile și multe altele. API-ul este bine documentat și ușor de utilizat, permițând dezvoltatorilor să își personalizeze și să își automatizeze complet fluxurile de lucru legate de emailuri. Pe lângă funcționalitățile de bază ale trimiterii de emailuri, API-ul SendGrid oferă și caracteristici avansate, cum ar fi segmentarea avansată a destinatarilor, testarea A/B, rapoartele detaliate și integrările cu alte platforme populare de marketing și CRM. Fiabilitatea și scalabilitatea sunt puncte forte ale acestui API, care poate gestiona cu ușurință volume mari de tranzacții de emailuri, asigurând livrarea lor în timp util și în conformitate cu cele mai înalte standarde de securitate și conformitate. Prin utilizarea API-ului SendGrid, dezvoltatorii pot îmbunătăți semnificativ experiența utilizatorilor lor în ceea ce privește comunicarea prin emailuri, construind în același timp aplicații mai eficiente și mai fiabile.

Exchange Rates Data API - oferă dezvoltatorilor acces la date actualizate și istorice privind ratele de schimb valutar. Acesta furnizează informații precise și actualizate despre conversiile valutare între diverse monede, facilitând astfel dezvoltarea de aplicații și servicii care implică tranzacții financiare internaționale. Prin intermediul acestui API, dezvoltatorii pot integra ușor funcționalități legate de ratele de schimb în aplicațiile lor, cum ar fi calculatoarele valutare, aplicațiile de contabilitate sau platformele de comerț electronic, oferind astfel utilizatorilor o experiență mai fluentă și mai precisă în gestionarea tranzacțiilor valutare.

Metodele HTTP sunt modalități standardizate de comunicare între client și server în cadrul unei aplicații web, fiecare având un scop specific în gestionarea datelor și acțiunilor pe resursele serverului. În cadrul acestei aplicații, sunt utilizate următoarele metode:

GET (Citire): Această metodă este folosită pentru a obține date de la server. De exemplu, atunci când un client solicită pagina principală a unei aplicații web, utilizează metoda GET pentru a primi informațiile corespunzătoare din baza de date și a le afișa utilizatorului.

POST (Creare): Metoda POST este utilizată pentru a trimite date către server pentru a crea resurse noi în baza de date. De exemplu, atunci când un utilizator completează un formular de înregistrare și apasă butonul de "Înregistrare", datele introduse sunt trimise către server folosind metoda POST pentru a crea un nou cont în baza de date.

PUT (Actualizare): Metoda PUT este folosită pentru a actualiza datele unei resurse existente pe server. De exemplu, atunci când un utilizator își actualizează profilul într-o aplicație, datele actualizate sunt trimise către server folosind metoda PUT pentru a actualiza înregistrarea corespunzătoare în baza de date.

DELETE (Ștergere): Această metodă este utilizată pentru a șterge o resursă existentă pe server. De exemplu, atunci când un utilizator decide să șteargă un element din lista sa de produse favorite într-o aplicație de comerț electronic, cererea de ștergere este trimisă către server folosind metoda DELETE pentru a elimina înregistrarea corespunzătoare din baza de date.

Aceste operații CRUD (Create, Read, Update, Delete) reprezintă acțiunile fundamentale pe care le poate efectua un client asupra resurselor unei aplicații web și sunt esențiale în comunicarea între client și server pentru gestionarea datelor.

Capturi ecran platforme utilizate și aplicație
