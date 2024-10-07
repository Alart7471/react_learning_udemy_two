import React from "react";
import { Modal, Box, Typography, Button, TextField } from "@mui/material";
import './style/ModalTestOne.scss';

function ModalTestOne({ open, handleClose, item, userNickname }) {
    return (
        <Modal open={open} onClose={handleClose}>
            <Box className="modal-box">
                {item ? (
                    <>
                        <Typography variant="h6" className="modal-title">{item.name}</Typography>
                        <img src={item.url} alt={item.name} className="modal-image" />
                        {/* <Typography variant="body1" className="modal-description">{item.description}</Typography> */}
                                    {/* Кнопка для показа/скрытия описания */}
                        <Typography variant="body2" className="modal-price">{`Цена: ${item.price[0]} ₽`}</Typography>
                        <Button
                            className="modal-description-btn"
                            onClick={() => {
                                const descriptionBtn = document.querySelector('.modal-description-btn');
                                const description = document.querySelector('.modal-description');
                                descriptionBtn.classList.toggle('modal-description-btn-active');
                                description.classList.toggle('modal-description-active');
                            }}
                        >
                            Описание <span className="arrow-down">&#9660;</span>
                        </Button>
                        
                        {/* Описание товара */}
                        <Typography variant="body1" className="modal-description">
                            {/* {item.description} */}
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis exercitationem beatae quas labore ex. Consequuntur neque aperiam autem ipsam, dolorem placeat optio nulla reprehenderit similique laboriosam facilis corrupti modi impedit deserunt saepe tempore porro adipisci cupiditate perferendis rerum sint accusantium expedita in reiciendis. Iure veritatis cum adipisci voluptates error omnis pariatur excepturi nesciunt aliquam voluptatibus culpa dolor deleniti aut quae velit, veniam animi alias ullam laboriosam quas ut. Corporis facere quidem neque, id velit maxime laborum vitae asperiores officiis fugit quam ullam quaerat veniam aspernatur. Soluta corporis eligendi eaque autem provident facere doloribus qui voluptatibus sit dignissimos eum cumque molestiae laborum eveniet officiis neque rem minus atque ab, esse dolorem repellendus quae id pariatur. Maxime rerum quam tenetur qui impedit quod earum saepe magnam temporibus sunt iusto aliquam animi veniam veritatis molestiae distinctio reprehenderit architecto ad, a sapiente! Alias dignissimos minima eveniet iusto accusantium illo assumenda. Ipsam nisi impedit doloribus perspiciatis, sequi voluptates veniam eveniet. Quisquam illo quam ad exercitationem porro aliquid, quaerat delectus dicta dolores? Eius, adipisci ducimus a enim quod perspiciatis nostrum ex officia. Ipsum harum cupiditate architecto illo accusamus ea cum necessitatibus molestiae dicta, iure soluta? Alias id, nisi iste delectus officia repudiandae natus? Modi aut expedita sapiente. Fugiat beatae quis placeat aliquam dicta nesciunt, perspiciatis cum quaerat, esse id accusantium ipsam corporis mollitia nulla praesentium alias facere consequatur commodi quos est minus soluta voluptates. Aliquid, placeat. Consequatur, consequuntur? Minus aperiam, quaerat laudantium odio deserunt aspernatur a assumenda impedit magni vel blanditiis quos. Quibusdam quis suscipit eius ipsa ullam quia animi sunt veritatis quasi, eligendi voluptatibus natus similique ducimus architecto est itaque corporis aperiam sapiente. Quia in aliquid delectus iste tempore, quis corporis soluta nam et, magni voluptate? Blanditiis ad enim ratione. Natus, a? Tenetur, quaerat deserunt recusandae numquam cum totam eligendi dolorem aperiam tempora consectetur porro nobis dolorum adipisci architecto quisquam modi quod molestiae at iure reprehenderit. Possimus assumenda temporibus architecto voluptate dolores ullam a! Mollitia suscipit aliquam cupiditate a deleniti natus repudiandae aspernatur, corrupti maiores quos aut iusto illum molestiae, sint reprehenderit soluta sapiente. Libero fugit soluta doloribus consectetur cupiditate quidem sapiente, adipisci ab, tenetur aperiam saepe laboriosam ipsam neque eius reiciendis, illo debitis nisi quibusdam reprehenderit. Ea, id ad quibusdam reprehenderit molestias veniam aliquam maxime nulla, reiciendis cupiditate esse ipsam placeat dolores atque. Ipsa tempora rem cumque. Accusamus quod architecto dolor rem fuga numquam veniam magnam ullam harum nam cum nisi facilis quam quos ipsum earum nobis suscipit, saepe rerum minima! Fugit repellendus corrupti minus voluptas cumque quisquam nesciunt officiis inventore animi qui, reprehenderit ab delectus voluptates cum placeat pariatur est natus at distinctio praesentium. Esse inventore ipsum vitae ducimus doloribus consequuntur repudiandae nemo, quis ipsa laboriosam autem. Dolores dolor nesciunt sapiente qui, quia expedita quod inventore modi distinctio quaerat repudiandae ad voluptates asperiores facilis hic autem id illum doloremque at sint ex reiciendis. Excepturi, rerum. Numquam nemo aut fugit soluta laborum corrupti asperiores omnis placeat eum quae. Mollitia officiis, aspernatur natus error aliquid sit sunt aliquam corrupti ut, quis placeat odit cum commodi?
                        </Typography>
                        <TextField
                            label="Nickname"
                            placeholder="Nickname"
                            variant="standard"
                            className="modal-nickname"
                        />
                        <div className="modal-buy-button">

                            <Button variant="contained" onClick={() => {
                                //логика отправки запроса на покупку
                                // eslint-disable-next-line no-restricted-globals
                                confirm(`Подтвердите ваш ник ${userNickname}`)
                                alert(`Купите ${item.name} за ${item.price[0]} ₽`)

                            }}>
                                Купить за {item.price[0]} ₽
                            </Button>
                        </div>
                        <div className="modal-close-button">    
                        <Button variant="contained" onClick={handleClose} color="error">
                            Х
                        </Button>
                        </div>
                        
                    </>
                ) : (
                    <Typography variant="body1">Выберите товар для просмотра</Typography>
                )}
            </Box>
        </Modal>
    );
}

export default ModalTestOne;