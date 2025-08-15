const toggleMenu = () => {
  const navMenu = document.querySelector('.menu');

  navMenu.classList.toggle('active');

  console.log('we have been clicked');

  console.log(navMenu);
}

const eligible = (ageChild, disease, familyIncome) => {

  if ((ageChild < 5) && (disease == "N") && (familyIncome < 4500)) {
    ansEligible.innerHTML = ("Congratulations🎉 your child is eligible for free vaccination <br> Please book an appointment now ")
  } else{
    ansEligible.innerHTML = ("Sorry your child is not eligible for free vaccination")
  }
}

const agechildeEle = document.querySelector('.childAge');

const diseaseEle = document.querySelector('.disease');

const familyIncomeEle = document.querySelector('.familyIncome');

const ansEligible = document.getElementById('ansEligible');

const checkBtnEle = document.querySelector('.checkBtn')


// console.log(agechildeEle, agechildeEle.typeOf)
// console.log(diseaseEle, diseaseEle.typeOf)
// console.log(familyIncomeEle, familyIncomeEle.typeOf)


checkBtnEle.addEventListener('click',(event) => {
event.preventDefault();

// console.log("this is the select ", diseaseEle.value)

const ageChild = parseInt(agechildeEle.value)

const familyIncome = parseFloat(familyIncomeEle.value);

const disease = diseaseEle.value.trim().toUpperCase();;

eligible(ageChild, disease, familyIncome);

  console.log('Eligibility check completed');

console.log('listener activates function');
})


