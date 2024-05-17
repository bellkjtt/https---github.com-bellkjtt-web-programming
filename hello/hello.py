from flask import *

app = Flask(__name__)


@app.route('/')
def hello():
    return 'Hello Falsk'


@app.route('/user/<name>')  # user로 요청했을 때 name을 넣는다.
def user(name):
    return render_template('index.html', user=name)  # 템플릿을 실행한다.
# index.html로 해당 url을 받아준다.
# 그러면 주소창에 추가적으로 입력했을 때 index.html에 추가된다.


@app.route('/people')
def people():
    data = dict(request.values)  # 이 데이터에는 클라이언트에서 보내준 결과가 출력된다.
    print(data)
    result = {'name': data['name'], 'age': data['age']}
    return jsonify(result)  # 문자열만 주고 받을 수 있으므로 주고받는다.


app.run(debug=True)
