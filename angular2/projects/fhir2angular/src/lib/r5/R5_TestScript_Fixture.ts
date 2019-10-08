import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_TestScript_Fixture      extends R5_BackboneElement
{

   static def : string = 'TestScript_Fixture';
   autocreate : boolean ;
   autodelete : boolean ;
   resource : R5_Reference ;
}
