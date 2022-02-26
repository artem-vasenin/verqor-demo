import Head from 'next/head'
import { Typography, Divider, Row, Col } from 'antd';

import MainLayout from '../components/layouts/MainLayout'

import classes from '../styles/Home.module.scss'

export default function Home() {
  const { Title, Paragraph, Text } = Typography;

  return (
    <MainLayout>
      <Head>
        <title>Home page</title>
      </Head>

      <Row>
        <Col span={24}>
          <Typography>
            <div className={classes.heading}>
              <Title level={1}>Full stack task</Title>
            </div>

            <Paragraph>
              Приложение блога. Язык: TypeScript.<br/>
              Результат загружаем на свой GitHub, даем доступ чтения для аккаунта "7binary".
            </Paragraph>

            <Divider />

            <Paragraph>
              <Title level={5}>Бэкэнд: NestJS фреймворк + TypeORM/Prisma + Postgres/MySQL.</Title>
              <ul>
                <li>
                  <Text>Создайте проект на Nest-фреймворке с подключением к БД.</Text>
                </li>
                <li>
                  <Text>Создайте модуль блога</Text>
                  <ul>
                    <li>
                      <Text italic>c моделью для поста блога (ID, заголовок, анонс короткий, текст длинный для деталки) ;</Text>
                    </li>
                    <li>
                      <Text italic>с моделью комментариев к посту (ID, постID, имя пользователя, комментарий);</Text>
                    </li>
                  </ul>
                </li>
                <li>
                  <Text>Создайте контроллер и сервис для REST API:</Text>
                  <ul>
                    <li>
                      <Text italic>получение списка постов с указанием кол-ва комментариев. В этом же API можно сгенерировать пару постов, если в базе не нашлось ни одного;</Text>
                    </li>
                    <li>
                      <Text italic>получение одного поста по ID со вложенными комментариями, отсортированными по дате добавления;</Text>
                    </li>
                    <li>
                      <Text italic>добавление комментария к посту, с валидацией данных (имя пользователя, комментарий);</Text>
                    </li>
                  </ul>
                </li>
                <li>
                  <Text>Опционально можно прикрутить документацию к API: Swagger</Text>
                </li>
              </ul>
            </Paragraph>

            <Divider />

            <Paragraph>
              <Title level={5}>Фронтэнд: React</Title>
              <ul>
                <li>
                  <Text>Создайте проект на NextJS.</Text>
                </li>
                <li>
                  <Text>Для удобства работы с UI можно подключить Atnd/Bootstrap/MaterialUI или использовать module.css</Text>
                </li>
                <li>
                  <Text>Создайте страницу со списком постов, где отображается заголовок, анонс и кнопка на переход к чтению поста.</Text>
                </li>
                <li>
                  <Text>Создайте страницу с деталкой поста, где помимо заголовка и анонса так же длинный текст.<br/>
                    Текст поста может включать в себя HTML-теги.</Text>
                </li>
                <li>
                  <Text>На страницу поста встройте компонентом форму для добавления комментария.<br/>
                    При незаполненных данных отобразим ошибку с сервера.<br/>
                    Опционально можно добавить и клиентскую валидацию.<br/>
                    При успешно отправленном комментарии сразу же добавим его на страницу и сбросим форму.<br/>
                    В заголовке страницы (head - title) ожидаем увидеть заголовок новости.</Text>
                </li>
                <li>
                  <Text>Ожидаем увидеть адаптивную версию, под 3 размера экрана: монитор, планшет, телефон.</Text>
                </li>
              </ul>
            </Paragraph>
          </Typography>
        </Col>
      </Row>
    </MainLayout>
  )
}
