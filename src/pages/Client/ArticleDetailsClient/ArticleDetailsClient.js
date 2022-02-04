import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography'
import Box from '@mui/system/Box'
import Grid from "@mui/material/Grid";
import { GET_ARTICLE_BY_ID } from "../../../gql/queries";
import { useHistory, useParams } from "react-router";
import { gql, useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import LoadingPage from "../../../components/LoadingPage/LoadingPage";
import ArticleRecom from "../../../components/ArticleRecom/ArticleRecom";


const dummyTitle = "The Looming mental Health Crisis"
const dummyPreview = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Iusto dolorum repudiandae explicabo repellendus commodi natus aliquid veniam omnis ipsum! Ut commodi quibusdam aperiam laborum suscipit enim?Nobis deleniti repudiandae at! Quidem ipsam quibusdam quos repellat cum magnam eius laboriosam, ad obcaecati.Distinctio nam ullam quod modi maxime fugit ut, dignissimos maiores sint architecto sunt atque pariatur, error obcaecati cupiditate eius."
const dummyContent = <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ipsum? Officiis illum aliquid fugit tempora rem, recusandae, commodi nam eveniet eos modi dolorum nulla sint, nostrum ratione aperiam officia veniam.
    Quo rem maiores alias asperiores dolores amet accusantium dolore nisi est laboriosam neque tempore natus veniam nulla enim ea eum eligendi autem nihil, tenetur quae, sint voluptates facilis! Blanditiis, odio.
    Quia quae neque natus optio iusto reprehenderit. Rerum iste quidem, tempore delectus quia corporis cupiditate beatae voluptatum quibusdam deleniti, cum recusandae esse quam optio. Delectus adipisci numquam commodi est minus!
    Ullam eaque eveniet, in optio maxime quibusdam qui quae unde vel possimus temporibus. Ducimus iure eaque, laboriosam doloremque cum, consectetur nobis fugiat nisi odit molestiae sint ipsam itaque modi nemo.
    Soluta impedit quia sequi laborum veritatis sapiente, alias eveniet culpa et corporis at esse tempore pariatur totam dicta necessitatibus ex fugiat modi magnam architecto deleniti omnis assumenda praesentium. Totam, eveniet.
    Quis hic esse repudiandae unde nemo reprehenderit quo veritatis nulla sit totam dolore ad, praesentium mollitia vel officia asperiores corrupti modi. Odio blanditiis, consectetur delectus necessitatibus consequuntur earum error autem.
    Quisquam quae vitae quo corporis aliquam, rerum quos, itaque enim voluptas quaerat placeat iure ipsa consectetur doloribus illum facilis commodi sequi soluta dolores tempore suscipit. Tempore corporis vero consequatur quisquam!
    Ratione voluptatibus ullam reprehenderit dignissimos assumenda nam obcaecati sed porro neque ad? Tempore odit officiis, modi iusto repellendus deserunt ullam nemo incidunt eveniet assumenda voluptas, explicabo ratione nisi nihil quaerat.
    In unde aut quam provident! Exercitationem eos ipsa totam aperiam voluptates a fugiat id excepturi aut quidem quaerat, iusto amet tempora accusamus suscipit illo nesciunt voluptatem laudantium aspernatur! Maxime, unde!
    Perferendis iusto, incidunt cumque praesentium laudantium debitis quo esse tempore totam sit, temporibus explicabo nulla qui tenetur. Delectus, autem eos? Voluptas voluptatem quas est eum magnam placeat suscipit odio eligendi!</p>

const ArticleDetailsClient = () => {
    const { id } = useParams();
    const [article, setArticle] = useState({})
    const [variables, setVariables] = useState({
        variables: {
            "id": id
        }
    })

    useEffect(() => {
        setVariables({
            variables: {
                "id": id
            }
        })
    }, [id])

    const {
        loading,
        error,
        data,
        refetch
    } = useQuery(GET_ARTICLE_BY_ID, variables);

    useEffect(() => {
        setArticle(data?.before25_articles_by_pk)
    }, [data])

    if (loading) return <LoadingPage />
    if (error) return <h1>{error.message}</h1>
    // if (!loading) console.log(article)
    return (
        <Box
            className="resources"
            sx={{
                marginTop: '90px',
                marginRight: '2px'
            }}
        >
            <Grid
                container
                spacing={3}
                justifyContent="space-between"
            >
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            textAlign: 'left',
                        }}
                        variant="h6"
                        component="p"
                        color="textPrimary"
                    >
                        01 / {article?.title}
                    </Typography>
                </Grid>
                <Grid item xs={12} container spacing={0}>
                    <Grid
                        item
                        xs={12}
                        md={9}
                    >
                        <Typography
                            variant="h3"
                            sx={{
                                marginBottom: '20px',
                                fontStyle: 'italic',
                                marginRight: '100px',
                            }}
                        >
                            {article?.title}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={9}
                    >
                        <Typography
                            variant="subheader"
                            sx={{
                                marginBottom: '30px',
                                fontStyle: 'italic',
                            }}
                        >
                            Written by {article?.author?.name}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={9}
                    >
                        <Typography
                            sx={{
                                marginTop: '50px',
                            }}
                        >
                            {ReactHtmlParser(article?.content)}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <ArticleRecom />
        </Box >
    );
}

export default ArticleDetailsClient;