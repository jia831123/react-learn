import { useMemo, useState } from 'react'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Snackbar from '@mui/material/Snackbar'
import ButtonGroup from '@mui/material/ButtonGroup'

function LineDevelop() {
  const [form, setForm] = useState({
    liffUrl: 'https://liff.line.me/1654066743-XqROyByj',
    liffId: '1654066743-XqROyByj',
    lineBasicId: '@959lrdcb',
    lineId: '5db13bab',
    gameId: '186ed69250cbKD',
  })
  const [open, setOpen] = useState(false)
  const result = useMemo(
    () =>
      `${form.liffUrl}?liffId=${form.liffUrl.split('/')[3]}&gameId=${
        form.gameId
      }&lineBasicId=${form.lineBasicId}&lineId=${form.lineId}`,
    undefined
  )
  const handleCopy = () => {
    navigator.clipboard.writeText(result)
    setOpen(true)
  }
  const handleClose = () => setOpen(false)
  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          copy success !
        </Alert>
      </Snackbar>
      <Card className="m-auto" sx={{ minWidth: 400, maxWidth: 800 }}>
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Alert severity="info">Accunix 遊戲client端測試網址生成</Alert>
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={form.liffUrl}
                onChange={(event) =>
                  setForm({ ...form, liffUrl: event.target.value })
                }
                id="outlined-basic"
                label="LIFF URL"
                className="w-full"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={form.gameId}
                onChange={(event) =>
                  setForm({ ...form, gameId: event.target.value })
                }
                id="outlined-basic"
                label="gameId"
                className="w-full"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={form.lineBasicId}
                onChange={(event) =>
                  setForm({ ...form, lineBasicId: event.target.value })
                }
                id="outlined-basic"
                label="lineBasicId"
                className="w-full"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={form.lineId}
                onChange={(event) =>
                  setForm({ ...form, lineId: event.target.value })
                }
                id="outlined-basic"
                label="lineId"
                className="w-full"
              />
            </Grid>
            <Grid item xs={12}>
              <Alert severity="success">{result}</Alert>
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button className="w-full" variant="outlined" onClick={handleCopy}>
            Copy Url
          </Button>
        </CardActions>
        <CardActions className="justify-center">
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button
              className="w-full"
              variant="outlined"
              onClick={() =>
                window.open(
                  'https://developers.line.biz/console/channel/1653785141/liff/',
                  'test'
                )
              }
            >
              Line Develop-開發
            </Button>
            <Button
              className="w-full"
              variant="outlined"
              onClick={() =>
                window.open(
                  'https://developers.line.biz/console/channel/1654066743',
                  'test'
                )
              }
            >
              Line Develop-測試
            </Button>
            <Button
              className="w-full"
              variant="outlined"
              onClick={() =>
                window.open(
                  'https://developers.line.biz/console/channel/1653895455',
                  'test'
                )
              }
            >
              Line Develop-正式
            </Button>
          </ButtonGroup>
        </CardActions>
      </Card>
    </div>
  )
}

export default LineDevelop
