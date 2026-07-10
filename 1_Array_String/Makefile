CXX      := g++
CXXFLAGS := -std=c++17 -Wall -Wextra -g
TARGET   := two_pointers
TEST     := test_two_pointers

SRCS     := two_pointers.cpp
OBJS     := $(SRCS:.cpp=.o)

.PHONY: all clean run start test

all: $(TARGET)

$(TARGET): $(OBJS)
	$(CXX) $(CXXFLAGS) -o $@ $^

%.o: %.cpp
	$(CXX) $(CXXFLAGS) -c $< -o $@

# two_pointers.cpp 與 test 都相依於 header
$(OBJS): two_pointers.h

test: $(TEST)
	./$(TEST)

$(TEST): test_two_pointers.cpp two_pointers.h
	$(CXX) $(CXXFLAGS) -o $@ test_two_pointers.cpp

clean:
	rm -f $(OBJS) $(TARGET) $(TEST)

run: all
	./$(TARGET)

start:
	@$(MAKE) all
	@$(MAKE) run
