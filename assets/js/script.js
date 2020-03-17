// Exercice "Permis de conduire" : Faire une page pour indiquer si une personne peut passer le permis de conduire, en fonction de son âge. La page doit avoir un champ "prénom", un champ "âge", et un bouton "Vérifier". Quand on clique sur le bouton, la page indique si la personne peut passer le permis (+ de 18 ans), si elle peut être en conduite accompagnée (+ de 16 ans), ou si elle ne peut pas passer le permis. (Bonus : essayez d'afficher combien d'années il reste avant que la personne puisse passer le permis.)


document.querySelector('.verify-btn').addEventListener('click', function() {
  let nom = document.querySelector('#prenom').value;
  let age = document.querySelector('#age').value;
  if (age >= 18) {
    alert(`Bonjour ${nom}, vous pouvez passer votre permis !`);
  }
  else if (age >= 16) {
    alert(`Bonjour ${nom}, vous pouvez passer la conduite accompagnée !`)
  }
  else {
    let ageRestant = 18 - (document.querySelector('#age').value);
    alert(`Bonjour ${nom}, vous êtes trop jeune ` + `: il vous reste ${ageRestant} ans avant de pouvoir passer votre permis`);
  }
});

// Exercice : "Manipulation des dates" : on reprend la page des permis de conduire. Remplacer le champ input "Âge" par un champ input "Date de naissance". Ensuite, calculer en Javascript l'âge de la personne à partir de sa date de naissance, pour afficher si elle peut passer le permis ou pas.
//
// function donnerAge(date) {
//   let diff = Date.now() - date.getTime();
//   let age = new Date(diff);
//   return Math.abs(age.getUTCFullYear() - 2020);
// }
//
// document.querySelector('.verify-btn').addEventListener('click', function() {
//   let age = document.querySelector('#birthdate').value;
//   let nom = document.querySelector('#prenom').value;
//   let anneesRestantes = (18 - age);
//   if (age >= 18) {
//     alert(`Bonjour ${nom}, vous pouvez passer votre permis !`);
//   }
//   else if (age >= 16) {
//     alert(`Bonjour ${nom}, vous pouvez passer la conduite accompagnée !`)
//   }
//   else {
//     let ageRestant = 18 - (anneesRestantes);
//     alert(`Bonjour ${nom}, vous êtes trop jeune ` + `: il vous reste ${ageRestant} ans avant de pouvoir passer votre permis`);
//   }
// });
