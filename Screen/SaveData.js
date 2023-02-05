Dataformapi.length === 0 ? 
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text>No Information...</Text>
                  </View>
                 : 
                  Dataformapi.map((item, index) => {
                    return (
                      <View style={{flexDirection: 'row'}} key={index}>
                        <Text
                          style={{
                            flex: 0.5,
                            marginEnd: 10,
                            marginBottom: 20,
                            fontSize: 25,
                            color: 'white',
                            fontWeight: '700',
                          }}>
                          {item.Name}
                        </Text>
                        <Text
                          style={{
                            flex: 0.4,
                            fontSize: 25,
                            color: 'yellow',
                            fontWeight: '700',
                          }}>
                          {item.Price}
                        </Text>
                        <TouchableOpacity
                          onPress={() => AlertForDelete(item.Id)}
                          style={{flex: 0.1, alignItems: 'center'}}>
                          <Image
                            source={require('./img/delete.png')}
                            style={{width: 25, height: 30}}
                          />
                        </TouchableOpacity>
                      </View>
                    );
                  })





                  (
                    Dataformapi.length === 0 ? 
                    <View>
                      <Text>
                        No Information...
                      </Text>
                    </View>
                    :
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{
                          flex: 0.5,
                          marginEnd: 10,
                          marginBottom: 20,
                          fontSize: 25,
                          color: 'white',
                          fontWeight: '700',
                        }}>
                        {item.Name}
                      </Text>
                      <Text
                        style={{
                          flex: 0.4,
                          fontSize: 25,
                          color: 'yellow',
                          fontWeight: '700',
                        }}>
                        {item.Price}
                      </Text>
                      <TouchableOpacity
                        onPress={() => DelInfor(item.Id)}
                        style={{flex: 0.1, alignItems: 'center'}}>
                        <Image
                          source={require('./img/delete.png')}
                          style={{width: 25, height: 30}}
                        />
                      </TouchableOpacity>
                    </View>
                  );