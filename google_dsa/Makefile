# 一鍵測試所有主題（C++ 與 Python）。
#   make test       跑全部
#   make test-cpp   只跑 C++
#   make test-py    只跑 Python
#   make clean      清除 C++ 編譯產物

CXX      := g++
CXXFLAGS := -std=c++17 -Wall -Wextra

# 找出每個主題資料夾裡的 .cpp 與 test_*.py
CPP_SRCS := $(wildcard */*.cpp)
CPP_BINS := $(CPP_SRCS:.cpp=)
PY_TESTS := $(wildcard */test_*.py)

.PHONY: test test-cpp test-py clean

test: test-cpp test-py

test-cpp: $(CPP_BINS)
	@for bin in $(CPP_BINS); do \
		echo "=== [C++] $$bin ==="; \
		echo "$$ ./$$bin"; \
		./$$bin || exit 1; \
	done

# 每個 .cpp 編成同名執行檔
%: %.cpp
	$(CXX) $(CXXFLAGS) -o $@ $<

test-py:
	@for t in $(PY_TESTS); do \
		echo "=== [Py] $$t ==="; \
		echo "$$ ( cd $$(dirname $$t) && uv run python $$(basename $$t) )"; \
		( cd $$(dirname $$t) && uv run python $$(basename $$t) ) || exit 1; \
	done

clean:
	rm -f $(CPP_BINS)
	rm -rf */*.dSYM
