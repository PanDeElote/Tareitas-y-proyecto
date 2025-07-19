import estudiantes from '../data/estudiantes.js';
import cursos from '../data/cursos.js';
import calificaciones from '../data/calificaciones.js';

function obtenerCalificaciones(req, res){
    let result = [];
    calificaciones.map(cal => {
        const estudiante = estudiantes.find(e => e.id === cal.estudianteId);
        const curso = cursos.find(cu => cu.id === cal.cursoId);

        if(!estudiante || !curso){
            return res.status(400).json({error: 'datos no encontrados'});
        }

        result.push({
            "nombre": estudiante.name,
            "curso": curso.nombre,
            "calificacion": cal.calificacion
        });

    });

    return res.json(result);
    
}

export default obtenerCalificaciones;
