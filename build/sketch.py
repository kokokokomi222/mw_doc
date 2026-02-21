from dataclasses import dataclass

# finite loop
'''
@dataclass
class State:
    start:int = 1
    end  :int = 100000000
state = State()

def get_loop_start_value() -> int:
    return state.start

def get_loop_end_value() -> int:
    return state.end

def loop_body(k:int):
    print('asdf')
    print(state.start)
    print(state.end)
    print(k)
    state.start *= 10
    state.end += 1

i:int = 0
while True:
    loop_start_value  :int = get_loop_start_value()
    loop_end_value    :int = get_loop_end_value()
    current_loop_value:int = loop_start_value + i
    if current_loop_value > loop_end_value:
        break
    i += 1
    loop_body(current_loop_value)
'''

# list iteration loop
my_list = ['aaa', 'bbb', 'ccc']

def get_iteration_list() -> list[str]:
    return my_list

i:int = 0
while True:
    iteration_list:list = get_iteration_list()
    if i >= len(iteration_list):
        break

    # it evaluates the list every time iteration value is used
    def get_iteration_value() -> str:
        return get_iteration_list()[i]
    
    print(get_iteration_value())
    my_list[i] = 'zzz'
    print(get_iteration_value())    

    i += 1