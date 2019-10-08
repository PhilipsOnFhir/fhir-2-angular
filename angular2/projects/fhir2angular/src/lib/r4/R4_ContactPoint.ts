import { R4_ContactPointSystemEnum } from './R4_ContactPointSystemEnum'
import { R4_ContactPointUseEnum } from './R4_ContactPointUseEnum'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Element } from './R4_Element'
import { R4_Period } from './R4_Period'

export class R4_ContactPoint      extends R4_Element
{

   static def : string = 'ContactPoint';
   system : R4_ContactPointSystemEnum ;
   value : string ;
   use : R4_ContactPointUseEnum ;
   rank : string ;
   period : R4_Period ;
}
