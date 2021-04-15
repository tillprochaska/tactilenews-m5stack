import pathlib
import json

NAMESPACE = 'tactilenews'
COLOR = '#1739a1'

BLOCKS_DIR = pathlib.Path(__file__).parent / 'blocks'

BLOCKS = [
  'adafruit_setup',
  'adafruit_publish',
]

m5b_file = {
   'category': NAMESPACE,
   'color': COLOR,
   'blocks': [],
   'jscode': '',
   'code': {},
}


def block_code(name: str) -> str:
   with open(BLOCKS_DIR / f"{name}.js", 'r') as file:
        code = file.read()
        code = code.replace('{{NAMESPACE}}', NAMESPACE)
        code = code.replace('{{COLOR}}', COLOR)

        return code


for block in BLOCKS:
    code = block_code(block)
    qualified_name = f"__{NAMESPACE}_{block}"
    m5b_file['blocks'].append(qualified_name)
    m5b_file['code'][qualified_name] = ''
    m5b_file['jscode'] += block_code(block)

print(json.dumps(m5b_file, indent=2))
