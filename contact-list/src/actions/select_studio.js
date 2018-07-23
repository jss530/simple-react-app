function selectStudio(studio) {
  return {
    type: 'STUDIO_SELECTED',
    payload: studio
  }
}

export default selectStudio;
