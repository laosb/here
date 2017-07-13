window._here_mapGenerator = (center = { x: 0, y: 0 }, firstTile = 'rural') => {
  console.time('mapGenerator')
  const getTypes = () => ['rural', 'sand', 'sand', 'sand', 'rocky', 'forest']
  const popuRange = {
    rural: { from: 10, to: 50 },
    sand: { from: 0, to: 2 },
    rocky: { from: 0, to: 1 },
    forest: { from: 0, to: 1 }
  }
  const difficulty = {
    rural: .1,
    sand: .8,
    rocky: .6,
    forest: .7,
  }
  const nextTile = (x, y) => [
    { x, y: y - 1 },
    { x, y: y + 1 },
    { x: x - 1, y },
    { x: x + 1, y }
  ] // Four tiles nearby.
  const randPopu = type => Math.round((popuRange[type].to - popuRange[type].from) * Math.random() + popuRange[type].from)
  const tileLimit = 2500
  let tiles = 0
  let map = []

  const waterGrow = ({ x, y }, waterBlockRemain) => {
    if (waterBlockRemain <= 0) { return 0 }

    if (!_.find(map, { x, y })) {
      map.push({ x, y, type: 'water', popu: 0})
    }
    waterGrow(_.sample(nextTile(x, y)), waterBlockRemain - 1)
  }

  const grow = ({ x, y }, prevTileType) => {
    if (tiles >= tileLimit) { return 0 }
    const currentTile = _.find(map, { x, y })

    if ((!currentTile) || (currentTile.type === 'water')) {
      // Increase the possiblity of generating the same tile as the last one.
      const newTypes = getTypes()
      newTypes.push(prevTileType)

      const type = _.sample(newTypes)

      map = _.reject(map, { x, y })
      map.push({ x, y, type, popu: randPopu(type) })
      waterGrow(_.sample(nextTile(x, y)), 15)
      tiles += 1

      grow(_.sample(nextTile(x, y)), type)
    } else {
      tiles += .5 // To prevent dead stack calls
      grow(_.sample(nextTile(x, y)), currentTile.type)
    }
  }
  grow(center, 'sand')
  tiles = 0
  center.x += 40
  grow(center, 'sand')
  tiles = 0
  center.x -= 80
  grow(center, 'sand')
  tiles = 0
  center.x += 40
  center.y -= 40
  grow(center, 'sand')
  tiles = 0
  center.y += 80
  grow(center, 'sand')
  console.timeEnd('mapGenerator')
  return map
}