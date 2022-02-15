import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useDropzone } from 'react-dropzone'
import classNames from 'classnames'
import SwiftLabel from '../swift-label/swift-label'
import { SwiftDropStyled } from './swift-drop-style'
//import ReactCrop from 'react-image-crop';
//import 'react-image-crop/dist/ReactCrop.css';
import { Modal } from 'react-bootstrap'
import SwiftButton from '../swift-button/swift-button'
//import { _imageCrop } from '../../../ajax/dash/global';

// detail stylesheet - https://github.com/mui-org/material-ui/issues/2130

const SwiftDrop = (props) => {
  const [status, setStatus] = React.useState({
    message: props.status === 'success' ? 'File uploaded!' : '',
    type: props.status ?? 'accept',
  })

  //console.log("SD-P", props);

  const { files, setFiles, crop } = props

  const [modal, setModal] = useState(null)

  //const [files, setFiles] = React.useState(props.files ?? []);
  const [fileProgress, setFileProgress] = useState(0)

  //console.log("fileProgress", fileProgress);

  useEffect(() => {
    //console.log('swift-drop.tsx - files changed...', files)
    if (files.length == 0) {
      setStatus({
        message: '',
        type: 'accept',
      })
      setFileProgress(0)
    } else {
      setStatus({
        message: files.length + ' file' + (files.length > 1 ? 's' : '') + ' uploaded.',
        type: 'success',
      })
    }
    //if (props.onChange) {
    //  props.onChange(files)
    //}
  }, [files])

  const {
    //acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: props.accept,
    onDrop(acceptedFiles) {
      //setFiles(acceptedFiles)

      //for (let i = 0; i < acceptedFiles.length; i++) {
      //const j = i
      //console.log("START UPLOAD", acceptedFiles)

      const formData = new FormData()
      for (let i = 0; i < acceptedFiles.length; i++) {
        formData.append('file[]', acceptedFiles[i])
      }
      formData.append('path', props.path || null)
      formData.append('output_format', props.output_format || null)

      const xhr = new XMLHttpRequest()
      //xhr.self = this;
      xhr.upload.onprogress = (event) => {
        const progress = Math.round(+((event.loaded / event.total) * 100))
        //console.log("file progress", progress)
        setFileProgress(progress)
      }

      xhr.open('POST', props.url || '/', true)
      xhr.send(formData)

      xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4) return
        if (xhr.status !== 200) {
          /*handle error*/
        }
        const res = JSON.parse(xhr.response)
        //console.log('SWIFTDROP - COMPLETE', JSON.parse(xhr.response))
        setFiles(res.output)

        if (crop && crop.active) {
          //setCropCurrent({ ...cropCurrent, width: res.output[0].width })
          setModal('crop')
        }
      }
      //}
    },
    onDropAccepted: (files) => {
      //console.log('DropZone: files accepted!', files)
      setStatus({
        message: files.length + ' file' + (files.length > 1 ? 's' : '') + ' uploading...',
        type: 'success',
      })
    },
    onDropRejected: (files) => {
      console.log('DropZone: files rejected!', files)
      setStatus({
        message: files.length + ' file' + (files.length > 1 ? 's' : '') + ' rejected.',
        type: 'warning',
      })
    },
    maxSize: props.maxSize ?? undefined,
  })

  /*
   *   Cropping Tool
   */
  const [cropCurrent, setCropCurrent] = useState({
    unit: '%',
    x: 0,
    y: 0,
    width: 100,
    aspect: crop.aspect || 1,
  })
  const [cropComplete, setCropComplete] = useState({})
  const handleCropComplete = async () => {
    //console.log('handleCropComplete running', cropComplete)
    try {
      //  SWIFT-FORM PACKAGE SIMPLIFICATION
      //const { data } = await _imageCrop({ ...cropComplete, image: files[0] });
      //console.log('handleCropComplete', data);
      setModal(null)
    } catch (e) {
      console.log('handleCropComplete error', e)
    }
  }
  //const imgRef = useRef(null)
  //const onCropLoad = useCallback((img) => {
  //  imgRef.current = img
  //}, [])

  /*
  if(status.message) {
      setTimeout(() => {
        setStatus({
      message: "",
      type: "",
    })
      },3000);
    }
    */

  /*files.forEach(function (item, index) {
    if (fileProgress[index]) {
      item['progress'] = fileProgress[index]
    } else {
      item['progress'] = 0
    }
    if (item['progress'] === 100) {
      item.status = 'complete'
    } else {
      item.status = 'uploading'
    }
  })*/

  //console.log('swift-drop.tsx - files', files)
  //console.log('swift-drop.tsx - cropCurrent', cropCurrent)

  return (
    <>
      <SwiftLabel>{props.label}</SwiftLabel>
      <SwiftDropStyled
        is_active={isDragActive}
        is_accept={isDragAccept}
        is_accepted={status.type === 'success'}
        is_reject={isDragReject}
        is_rejected={status.type === 'warning'}
      >
        <div className="_swift_drop_box" {...getRootProps()}>
          <input {...getInputProps()} />

          {files.length ? (
            <div className="_swift_drop_box_actions">
              {files[0] && files[0]['url'] && (
                <a
                  target="_blank"
                  href={files[0]['url']}
                  onClick={(e) => {
                    e.stopPropagation()
                    //e.preventDefault()
                    //window.location.href = files[0]['url']
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M17 13h6l-11 11-11-11h6v-13h10z" />
                  </svg>
                </a>
              )}

              <a
                onClick={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                  setFiles([])
                  setFileProgress(0)
                  setStatus({
                    message: '',
                    type: 'accept',
                  })
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                </svg>
              </a>
            </div>
          ) : null}
          <div className="_swift_drop_box_header">
            {status.type !== 'success' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479-1.092l4 4h-3v4h-2v-4h-3l4-4z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M23.334 11.96c-.713-.726-.872-1.829-.393-2.727.342-.64.366-1.401.064-2.062-.301-.66-.893-1.142-1.601-1.302-.991-.225-1.722-1.067-1.803-2.081-.059-.723-.451-1.378-1.062-1.77-.609-.393-1.367-.478-2.05-.229-.956.347-2.026.032-2.642-.776-.44-.576-1.124-.915-1.85-.915-.725 0-1.409.339-1.849.915-.613.809-1.683 1.124-2.639.777-.682-.248-1.44-.163-2.05.229-.61.392-1.003 1.047-1.061 1.77-.082 1.014-.812 1.857-1.803 2.081-.708.16-1.3.642-1.601 1.302s-.277 1.422.065 2.061c.479.897.32 2.001-.392 2.727-.509.517-.747 1.242-.644 1.96s.536 1.347 1.17 1.7c.888.495 1.352 1.51 1.144 2.505-.147.71.044 1.448.519 1.996.476.549 1.18.844 1.902.798 1.016-.063 1.953.54 2.317 1.489.259.678.82 1.195 1.517 1.399.695.204 1.447.072 2.031-.357.819-.603 1.936-.603 2.754 0 .584.43 1.336.562 2.031.357.697-.204 1.258-.722 1.518-1.399.363-.949 1.301-1.553 2.316-1.489.724.046 1.427-.249 1.902-.798.475-.548.667-1.286.519-1.996-.207-.995.256-2.01 1.145-2.505.633-.354 1.065-.982 1.169-1.7s-.135-1.443-.643-1.96zm-12.584 5.43l-4.5-4.364 1.857-1.857 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.642z" />
              </svg>
            )}
            <strong>{status.type == 'success' ? 'Uploaded!' : 'Upload Files...'}</strong>
            {status.message ? <small>{status.message}</small> : ''}
          </div>

          {fileProgress && fileProgress > 0 ? (
            <div className="_swift_drop_box_progress">
              <div className="_swift_drop_box_progress_bar">
                <div
                  className="_swift_drop_box_progress_bar_progress"
                  style={{
                    width: fileProgress + '%',
                  }}
                ></div>
              </div>
            </div>
          ) : null}
          {files.length ? (
            <ul className="_swift_drop_box_list">
              {files.slice(0, 3).map((file, index) => (
                <li key={file.name} className={classNames(file.status || 'success')}>
                  {/*file.status === 'complete' ? (
                  <Icon
                    className="fa fa-check _swift_drop_box_list_item_icon"
                    style={{
                      fontSize: 20,
                      width: 26,
                      textAlign: 'center',
                    }}
                  />
                ) : (
                  <Icon
                    className="fa fa-file-upload _swift_drop_box_list_item_icon"
                    style={{
                      fontSize: 26,
                      width: 26,
                      textAlign: 'center',
                    }}
                  />
                )*/}
                  <div className="_swift_drop_box_list_item_text">
                    <div className="_swift_drop_box_list_item_text_title">
                      <div className="_swift_drop_box_list_item_text_title_content">
                        <span>{file.name}</span>
                      </div>
                      {file.size ? (
                        <small>
                          {(file.size / 1000000).toFixed(2)}
                          MB
                        </small>
                      ) : null}
                    </div>
                    {/*<div className="_swift_drop_box_list_item_text_bar">
                      <div
                        className="_swift_drop_box_list_item_text_bar_progress"
                        style={{
                          width: (file.progress || 100) + '%',
                        }}
                      ></div>
                    </div>*/}
                  </div>
                </li>
              ))}
              {files.length > 3 && (
                <li className={'success'}>
                  <div className="_swift_drop_box_list_item_text">
                    <div className="_swift_drop_box_list_item_text_title">
                      <div className="_swift_drop_box_list_item_text_title_content">
                        <span>and {files.length - 3} more...</span>
                      </div>
                    </div>
                  </div>
                </li>
              )}
            </ul>
          ) : (
            ''
          )}
        </div>
      </SwiftDropStyled>

      {files.length > 0 && (
        <Modal show={modal == 'crop' && files.length > 0 ? true : false} onHide={crop.force ? () => {} : () => setModal(null)}>
          <Modal.Header closeButton={crop.force ? false : true}>
            <Modal.Title>Crop</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ padding: 0 }}>
            ReactCrop was here... Didn't work with RemixJS because of css imports
            <div style={{ padding: '1rem' }}>
              <SwiftButton icon="submit" onClick={() => handleCropComplete()} style={{ width: '100%' }}>
                Save
              </SwiftButton>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </>
  )
}
SwiftDrop.defaultProps = {
  label: 'Upload files',
  accept: '*',
  maxSize: null,
  type: null,
  format: null,
  crop: {
    active: false,
    aspect: 1,
    force: false,
  },
}

export default SwiftDrop
