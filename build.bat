@echo off
node generator.mjs %*
xcopy /S /Y resources build\resources > nul
@echo on
