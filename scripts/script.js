'use strict';

const popup = document.querySelectorAll('.popup');
const editPopup = document.querySelector('#edit-popup');
const addPopup = document.querySelector('#add-popup');
const editButton = document.querySelector('.edit-button');
const addButton = document.querySelector('.add-button');
const editCloseButton = document.querySelector('.edit-popup-close');
const addCloseButton = document.querySelector('.add-popup-close');
const popupName = document.querySelector('#popup__input-name');
const popupDescription = document.querySelector('#popup__input-description');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const formElement = document.querySelector('#form');
const cardsContainer = document.querySelector('.elements');
const cardTemplate = document.querySelector('.card-template').content;
const likeIcon = document.querySelectorAll('.element__like-icon');
const addForm = document.querySelector('.add-form');
const imagePopup = document.querySelector('.image-popup');
const fullImageLink = document.querySelector('.full-image-popup__img');
const fullImageText = document.querySelector('.full-image-popup__text');
const closeImage = imagePopup.querySelector('.full-image-popup__close-btn');



function openPopup (togglePopup) {
  togglePopup.classList.add('popup_opened');
};

function closePopup (togglePopup) {
  togglePopup.classList.remove('popup_opened');
};

  editButton.addEventListener('click', function () {
  openPopup(editPopup);
  popupName.setAttribute('value', profileName.textContent);
  popupDescription.setAttribute('value', profileDescription.textContent);
  });

  editCloseButton.addEventListener('click', function () {
  closePopup(editPopup);
  });

  addButton.addEventListener('click', function () {
  openPopup(addPopup);
  });

  addCloseButton.addEventListener('click', function () {
  closePopup(addPopup);
  });


formElement.addEventListener('submit', function (evt) {
evt.preventDefault();
profileName.textContent = popupName.value;
profileDescription.textContent = popupDescription.value;
closePopup(editPopup);
});


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function addCard(linkValue, textValue) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

  const cardLike = cardElement.querySelector('.element__like-icon');
  cardLike.addEventListener('click', function (evt) {
  evt.target.classList.toggle('element__like-icon_active');
});

  cardElement.querySelector('.element__image').addEventListener('click', function (){
    openPopup(imagePopup);
    fullImageLink.src = linkValue;
    fullImageText.textContent = textValue;
  });

  closeImage.addEventListener('click', function (){
    closePopup(imagePopup);
  })

  const deleteButton = cardElement.querySelector('.element__delete-button');
  deleteButton.addEventListener('click', function () {
  const cardItem = deleteButton.closest('.element');
  cardItem.remove();
});

  cardElement.querySelector('.element__image').src = linkValue;
  cardElement.querySelector('.element__caption-text').textContent = textValue;
  cardElement.querySelector('.element__image').setAttribute('alt', textValue);
  return cardElement;
};


addForm.addEventListener('submit', function(evt){
  evt.preventDefault();
  const text = document.querySelector('.popup__image-name');
  const link = document.querySelector('.popup__image-url');
  cardsContainer.prepend(addCard(link.value, text.value));
  closePopup(addPopup);
  addForm.reset();
});

function pastCards(){
  initialCards.forEach(function(card){
    cardsContainer.prepend(addCard(card.link, card.name));
  })};
pastCards();


