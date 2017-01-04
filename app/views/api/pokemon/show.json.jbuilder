json.extract! @pokemon, :name, :attack, :defense, :poke_type, :moves, :image_url
json.items @pokemon.items, :image_url
