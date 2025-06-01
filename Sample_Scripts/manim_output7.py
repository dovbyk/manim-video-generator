from manim import *
from manim_voiceover import VoiceoverScene
from manim_voiceover.services.gtts import GTTSService
import os

class GradientDescent(VoiceoverScene):
    def add_subcaption(self, text, **kwargs):
        pass  # This disables all subtitles
    
    def construct(self):
        # Set up the speech service - using gTTS with different accent for voice variation
        self.set_speech_service(GTTSService(lang="en", tld="com.au"))  # Australian accent
        

        # Display the title at the top of the screen
        title = Text("Gradient Descent", font_size=48).to_edge(UP)
        
        with self.voiceover(text="This is a visualization of gradient descent.") as tracker:
            self.play(Write(title), run_time=tracker.duration)
        
        # Set up coordinate axes
        axes = Axes(
            x_range=[-4, 4],
            y_range=[0, 16],
            x_length=10,
            y_length=5,
            axis_config={"color": GREY},
        ).shift(DOWN)

        # Define the function f(x) = x^2
        func = lambda x: x**2
        graph = axes.plot(func, color=BLUE)
        graph_label = axes.get_graph_label(graph, label="f(x) = x^2")

        with self.voiceover(text="Imagine we're trying to minimize the function f of x equals x squared. This curve represents our loss function.") as tracker:
            self.play(Create(axes), run_time=tracker.duration * 0.3)
            self.play(Create(graph), run_time=tracker.duration * 0.5)
            self.play(Write(graph_label), run_time=tracker.duration * 0.2)

        # Place the starting point (dot) on the graph at x=3
        x = 3
        dot = Dot(color=RED).move_to(axes.c2p(x, func(x)))
        start_label = Text("Start at x=3", font_size=24).next_to(dot, UP)
        
        with self.voiceover(text="We start at a random point on the curve, say x equals 3.") as tracker:
            self.play(FadeIn(dot), Write(start_label), run_time=tracker.duration)

        with self.voiceover(text="The slope of the curve tells us how steep it is. Using the derivative, we calculate the gradient.") as tracker:
            # Show initial gradient calculation
            grad = 2 * x
            tangent_line = Line(
                start=axes.c2p(x - 1, func(x) - grad),
                end=axes.c2p(x + 1, func(x) + grad),
                color=YELLOW
            )
            grad_label = MathTex(f"\\nabla f = {grad:.1f}").next_to(dot, RIGHT)
            self.play(Create(tangent_line), FadeIn(grad_label), run_time=tracker.duration)

        # Gradient descent steps parameters
        steps = 6  # Reduced steps for better timing
        alpha = 0.3  # learning rate / step size

        with self.voiceover(text="We then take a step in the opposite direction of the gradient. This is how gradient descent works — it updates the position iteratively, moving closer to the minimum.") as tracker:
            step_duration = tracker.duration / steps
            
            for i in range(steps):
                # Calculate next position
                next_x = x - alpha * 2 * x  # gradient of x^2 is 2x
                next_pos = axes.c2p(next_x, func(next_x))

                # Animate moving the dot to the new position
                self.play(
                    dot.animate.move_to(next_pos),
                    FadeOut(tangent_line),
                    FadeOut(grad_label),
                    FadeOut(start_label),
                    run_time=step_duration * 0.7
                )

                # Update x and create new labels for next iteration
                x = next_x
                if i < steps - 1:  # Don't create tangent for last step
                    grad = 2 * x
                    tangent_line = Line(
                        start=axes.c2p(x - 0.5, func(x) - grad * 0.5),
                        end=axes.c2p(x + 0.5, func(x) + grad * 0.5),
                        color=YELLOW
                    )
                    grad_label = MathTex(f"\\nabla f = {grad:.1f}").next_to(dot, RIGHT)
                    start_label = Text(f"x ≈ {x:.2f}", font_size=24).next_to(dot, UP)
                    
                    self.play(
                        Create(tangent_line),
                        FadeIn(grad_label),
                        Write(start_label),
                        run_time=step_duration * 0.3
                    )

        with self.voiceover(text="With each step, we descend further down the curve.") as tracker:
            # Show the path taken
            path_points = []
            temp_x = 3
            for _ in range(steps):
                path_points.append(axes.c2p(temp_x, func(temp_x)))
                temp_x = temp_x - alpha * 2 * temp_x
            
            path = VMobject()
            path.set_points_as_corners(path_points)
            path.set_color(GREEN)
            self.play(Create(path), run_time=tracker.duration)

        with self.voiceover(text="Eventually, we reach a point where the gradient is near zero — the minimum.") as tracker:
            # Final point reached - highlight in green and add label
            final_label = Text("Minimum Reached!", font_size=24, color=GREEN).next_to(dot, DOWN)
            self.play(
                Write(final_label),
                dot.animate.set_color(GREEN),
                run_time=tracker.duration
            )

        with self.voiceover(text="Gradient descent is a fundamental concept in machine learning, used to train models by minimizing loss functions.") as tracker:
            # Create a summary text
            summary = Text(
                "Gradient Descent:\nKey ML Optimization Algorithm",
                font_size=32,
                color=YELLOW
            ).to_edge(RIGHT).shift(UP)
            
            self.play(Write(summary), run_time=tracker.duration)
            self.wait(1)